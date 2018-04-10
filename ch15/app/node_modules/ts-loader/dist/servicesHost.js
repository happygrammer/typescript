"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var semver = require("semver");
var constants = require("./constants");
var resolver_1 = require("./resolver");
var utils_1 = require("./utils");
/**
 * Create the TypeScript language service
 */
function makeServicesHost(scriptRegex, log, loader, instance, appendTsSuffixTo, appendTsxSuffixTo) {
    var compiler = instance.compiler, compilerOptions = instance.compilerOptions, files = instance.files;
    var newLine = compilerOptions.newLine === constants.CarriageReturnLineFeedCode ? constants.CarriageReturnLineFeed :
        compilerOptions.newLine === constants.LineFeedCode ? constants.LineFeed :
            constants.EOL;
    // make a (sync) resolver that follows webpack's rules
    var resolveSync = resolver_1.makeResolver(loader.options);
    var readFileWithFallback = compiler.sys === undefined || compiler.sys.readFile === undefined
        ? utils_1.readFile
        : function (path, encoding) { return compiler.sys.readFile(path, encoding) || utils_1.readFile(path, encoding); };
    var fileExists = compiler.sys === undefined || compiler.sys.fileExists === undefined
        ? function (path) { return utils_1.readFile(path) !== undefined; }
        : function (path) { return compiler.sys.fileExists(path) || utils_1.readFile(path) !== undefined; };
    var moduleResolutionHost = {
        fileExists: fileExists,
        readFile: readFileWithFallback
    };
    // loader.context seems to work fine on Linux / Mac regardless causes problems for @types resolution on Windows for TypeScript < 2.3
    var getCurrentDirectory = (compiler.version && semver.gte(compiler.version, '2.3.0'))
        ? function () { return loader.context; }
        : function () { return process.cwd(); };
    var resolutionStrategy = (compiler.version && semver.gte(compiler.version, '2.4.0'))
        ? resolutionStrategyTS24AndAbove
        : resolutionStrategyTS23AndBelow;
    var servicesHost = {
        getProjectVersion: function () { return "" + instance.version; },
        getScriptFileNames: function () { return Object.keys(files).filter(function (filePath) { return filePath.match(scriptRegex); }); },
        getScriptVersion: function (fileName) {
            fileName = path.normalize(fileName);
            var file = files[fileName];
            return file === undefined ? '' : file.version.toString();
        },
        getScriptSnapshot: function (fileName) {
            // This is called any time TypeScript needs a file's text
            // We either load from memory or from disk
            fileName = path.normalize(fileName);
            var file = files[fileName];
            if (file === undefined) {
                var text = utils_1.readFile(fileName);
                if (text === undefined) {
                    return undefined;
                }
                file = files[fileName] = { version: 0, text: text };
            }
            return compiler.ScriptSnapshot.fromString(file.text);
        },
        /**
         * getDirectories is also required for full import and type reference completions.
         * Without it defined, certain completions will not be provided
         */
        getDirectories: compiler.sys ? compiler.sys.getDirectories : undefined,
        /**
         * For @types expansion, these two functions are needed.
         */
        directoryExists: compiler.sys ? compiler.sys.directoryExists : undefined,
        useCaseSensitiveFileNames: compiler.sys
            ? function () { return compiler.sys.useCaseSensitiveFileNames; }
            : undefined,
        // The following three methods are necessary for @types resolution from TS 2.4.1 onwards see: https://github.com/Microsoft/TypeScript/issues/16772
        fileExists: compiler.sys ? compiler.sys.fileExists : undefined,
        readFile: compiler.sys ? compiler.sys.readFile : undefined,
        readDirectory: compiler.sys ? compiler.sys.readDirectory : undefined,
        getCurrentDirectory: getCurrentDirectory,
        getCompilationSettings: function () { return compilerOptions; },
        getDefaultLibFileName: function (options) { return compiler.getDefaultLibFilePath(options); },
        getNewLine: function () { return newLine; },
        trace: log.log,
        log: log.log,
        /* Unclear if this is useful
        resolveTypeReferenceDirectives: (typeDirectiveNames: string[], containingFile: string) =>
            typeDirectiveNames.map(directive =>
                compiler.resolveTypeReferenceDirective(directive, containingFile, compilerOptions, moduleResolutionHost).resolvedTypeReferenceDirective),
        */
        resolveModuleNames: function (moduleNames, containingFile) {
            return resolveModuleNames(resolveSync, moduleResolutionHost, appendTsSuffixTo, appendTsxSuffixTo, scriptRegex, instance, moduleNames, containingFile, resolutionStrategy);
        },
        getCustomTransformers: function () { return instance.transformers; }
    };
    return servicesHost;
}
exports.makeServicesHost = makeServicesHost;
/**
 * Create the TypeScript Watch host
 */
function makeWatchHost(scriptRegex, log, loader, instance, appendTsSuffixTo, appendTsxSuffixTo) {
    var compiler = instance.compiler, compilerOptions = instance.compilerOptions, files = instance.files, otherFiles = instance.otherFiles;
    var newLine = compilerOptions.newLine === constants.CarriageReturnLineFeedCode ? constants.CarriageReturnLineFeed :
        compilerOptions.newLine === constants.LineFeedCode ? constants.LineFeed :
            constants.EOL;
    // make a (sync) resolver that follows webpack's rules
    var resolveSync = resolver_1.makeResolver(loader.options);
    var readFileWithFallback = compiler.sys === undefined || compiler.sys.readFile === undefined
        ? utils_1.readFile
        : function (path, encoding) { return compiler.sys.readFile(path, encoding) || utils_1.readFile(path, encoding); };
    var moduleResolutionHost = {
        fileExists: fileExists,
        readFile: readFileWithFallback
    };
    // loader.context seems to work fine on Linux / Mac regardless causes problems for @types resolution on Windows for TypeScript < 2.3
    var getCurrentDirectory = (compiler.version && semver.gte(compiler.version, '2.3.0'))
        ? function () { return loader.context; }
        : function () { return process.cwd(); };
    var resolutionStrategy = (compiler.version && semver.gte(compiler.version, '2.4.0'))
        ? resolutionStrategyTS24AndAbove
        : resolutionStrategyTS23AndBelow;
    var watchedFiles = {};
    var watchedDirectories = {};
    var watchedDirectoriesRecursive = {};
    var watchHost = {
        rootFiles: getRootFileNames(),
        options: compilerOptions,
        useCaseSensitiveFileNames: function () { return compiler.sys.useCaseSensitiveFileNames; },
        getNewLine: function () { return newLine; },
        getCurrentDirectory: getCurrentDirectory,
        getDefaultLibFileName: function (options) { return compiler.getDefaultLibFilePath(options); },
        fileExists: fileExists,
        readFile: readFileWithCachingText,
        directoryExists: function (s) { return compiler.sys.directoryExists(path.normalize(s)); },
        getDirectories: function (s) { return compiler.sys.getDirectories(path.normalize(s)); },
        readDirectory: function (s, extensions, exclude, include, depth) { return compiler.sys.readDirectory(path.normalize(s), extensions, exclude, include, depth); },
        realpath: function (s) { return compiler.sys.resolvePath(path.normalize(s)); },
        trace: function (s) { return log.logInfo(s); },
        watchFile: watchFile,
        watchDirectory: watchDirectory,
        resolveModuleNames: function (moduleNames, containingFile) {
            return resolveModuleNames(resolveSync, moduleResolutionHost, appendTsSuffixTo, appendTsxSuffixTo, scriptRegex, instance, moduleNames, containingFile, resolutionStrategy);
        },
        invokeFileWatcher: invokeFileWatcher,
        invokeDirectoryWatcher: invokeDirectoryWatcher,
        updateRootFileNames: function () {
            instance.changedFilesList = false;
            if (instance.watchOfFilesAndCompilerOptions) {
                instance.watchOfFilesAndCompilerOptions.updateRootFileNames(getRootFileNames());
            }
        },
        createProgram: compiler.createAbstractBuilder
    };
    return watchHost;
    function getRootFileNames() {
        return Object.keys(files).filter(function (filePath) { return filePath.match(scriptRegex); });
    }
    function readFileWithCachingText(fileName, encoding) {
        fileName = path.normalize(fileName);
        var file = files[fileName] || otherFiles[fileName];
        if (file !== undefined) {
            return file.text;
        }
        var text = readFileWithFallback(fileName, encoding);
        if (text === undefined) {
            return undefined;
        }
        otherFiles[fileName] = { version: 0, text: text };
        return text;
    }
    function fileExists(s) {
        s = path.normalize(s);
        return !!files.hasOwnProperty(s) || compiler.sys.fileExists(s);
    }
    function invokeWatcherCallbacks(callbacks, fileName, eventKind) {
        if (callbacks) {
            // The array copy is made to ensure that even if one of the callback removes the callbacks,
            // we dont miss any callbacks following it
            var cbs = callbacks.slice();
            for (var _i = 0, cbs_1 = cbs; _i < cbs_1.length; _i++) {
                var cb = cbs_1[_i];
                cb(fileName, eventKind);
            }
        }
    }
    function invokeFileWatcher(fileName, eventKind) {
        fileName = path.normalize(fileName);
        invokeWatcherCallbacks(watchedFiles[fileName], fileName, eventKind);
    }
    function invokeDirectoryWatcher(directory, fileAddedOrRemoved) {
        directory = path.normalize(directory);
        invokeWatcherCallbacks(watchedDirectories[directory], fileAddedOrRemoved);
        invokeRecursiveDirectoryWatcher(directory, fileAddedOrRemoved);
    }
    function invokeRecursiveDirectoryWatcher(directory, fileAddedOrRemoved) {
        directory = path.normalize(directory);
        invokeWatcherCallbacks(watchedDirectoriesRecursive[directory], fileAddedOrRemoved);
        var basePath = path.dirname(directory);
        if (directory !== basePath) {
            invokeRecursiveDirectoryWatcher(basePath, fileAddedOrRemoved);
        }
    }
    function createWatcher(file, callbacks, callback) {
        file = path.normalize(file);
        var existing = callbacks[file];
        if (existing) {
            existing.push(callback);
        }
        else {
            callbacks[file] = [callback];
        }
        return {
            close: function () {
                var existing = callbacks[file];
                if (existing) {
                    utils_1.unorderedRemoveItem(existing, callback);
                }
            }
        };
    }
    function watchFile(fileName, callback, _pollingInterval) {
        return createWatcher(fileName, watchedFiles, callback);
    }
    function watchDirectory(fileName, callback, recursive) {
        return createWatcher(fileName, recursive ? watchedDirectoriesRecursive : watchedDirectories, callback);
    }
}
exports.makeWatchHost = makeWatchHost;
function resolveModuleNames(resolveSync, moduleResolutionHost, appendTsSuffixTo, appendTsxSuffixTo, scriptRegex, instance, moduleNames, containingFile, resolutionStrategy) {
    var resolvedModules = moduleNames.map(function (moduleName) {
        return resolveModuleName(resolveSync, moduleResolutionHost, appendTsSuffixTo, appendTsxSuffixTo, scriptRegex, instance, moduleName, containingFile, resolutionStrategy);
    });
    populateDependencyGraphs(resolvedModules, instance, containingFile);
    return resolvedModules;
}
function isJsImplementationOfTypings(resolvedModule, tsResolution) {
    return resolvedModule.resolvedFileName.endsWith('js') &&
        /\.d\.ts$/.test(tsResolution.resolvedFileName);
}
function resolveModuleName(resolveSync, moduleResolutionHost, appendTsSuffixTo, appendTsxSuffixTo, scriptRegex, instance, moduleName, containingFile, resolutionStrategy) {
    var compiler = instance.compiler, compilerOptions = instance.compilerOptions;
    var resolutionResult;
    try {
        var originalFileName = resolveSync(undefined, path.normalize(path.dirname(containingFile)), moduleName);
        var resolvedFileName = appendTsSuffixTo.length > 0 || appendTsxSuffixTo.length > 0
            ? utils_1.appendSuffixesIfMatch({
                '.ts': appendTsSuffixTo,
                '.tsx': appendTsxSuffixTo,
            }, originalFileName)
            : originalFileName;
        if (resolvedFileName.match(scriptRegex)) {
            resolutionResult = { resolvedFileName: resolvedFileName, originalFileName: originalFileName };
        }
    }
    catch (e) { }
    var tsResolution = compiler.resolveModuleName(moduleName, containingFile, compilerOptions, moduleResolutionHost);
    if (tsResolution.resolvedModule !== undefined) {
        var resolvedFileName = path.normalize(tsResolution.resolvedModule.resolvedFileName);
        var tsResolutionResult = {
            originalFileName: resolvedFileName,
            resolvedFileName: resolvedFileName,
            isExternalLibraryImport: tsResolution.resolvedModule.isExternalLibraryImport
        };
        return resolutionStrategy(resolutionResult, tsResolutionResult);
    }
    return resolutionResult;
}
function resolutionStrategyTS23AndBelow(resolutionResult, tsResolutionResult) {
    if (resolutionResult !== undefined) {
        if (resolutionResult.resolvedFileName === tsResolutionResult.resolvedFileName ||
            isJsImplementationOfTypings(resolutionResult, tsResolutionResult)) {
            resolutionResult.isExternalLibraryImport = tsResolutionResult.isExternalLibraryImport;
        }
    }
    else {
        return tsResolutionResult;
    }
    return resolutionResult;
}
function resolutionStrategyTS24AndAbove(resolutionResult, tsResolutionResult) {
    return (resolutionResult === undefined ||
        resolutionResult.resolvedFileName === tsResolutionResult.resolvedFileName ||
        isJsImplementationOfTypings(resolutionResult, tsResolutionResult))
        ? tsResolutionResult
        : resolutionResult;
}
function populateDependencyGraphs(resolvedModules, instance, containingFile) {
    resolvedModules = resolvedModules
        .filter(function (mod) { return mod !== null && mod !== undefined; });
    instance.dependencyGraph[path.normalize(containingFile)] = resolvedModules;
    resolvedModules.forEach(function (resolvedModule) {
        if (instance.reverseDependencyGraph[resolvedModule.resolvedFileName] === undefined) {
            instance.reverseDependencyGraph[resolvedModule.resolvedFileName] = {};
        }
        instance.reverseDependencyGraph[resolvedModule.resolvedFileName][path.normalize(containingFile)] = true;
    });
}
