"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var utils_1 = require("./utils");
var constants = require("./constants");
/**
 * Make function which will manually update changed files
 */
function makeWatchRun(instance) {
    // Called Before starting compilation after watch
    var lastTimes = {};
    var startTime = null;
    return function (watching, cb) {
        if (null === instance.modifiedFiles) {
            instance.modifiedFiles = {};
        }
        startTime = startTime || watching.startTime;
        var times = watching.compiler.fileTimestamps;
        Object.keys(times)
            .filter(function (filePath) {
            return times[filePath] > (lastTimes[filePath] || startTime)
                && filePath.match(constants.tsTsxJsJsxRegex);
        })
            .forEach(function (filePath) {
            lastTimes[filePath] = times[filePath];
            updateFile(instance, filePath);
        });
        // On watch update add all known dts files expect the ones in node_modules
        // (skip @types/* and modules with typings)
        Object.keys(instance.files)
            .filter(function (filePath) {
            return filePath.match(constants.dtsDtsxRegex) && !filePath.match(constants.nodeModules);
        })
            .forEach(function (filePath) {
            updateFile(instance, filePath);
        });
        cb();
    };
}
exports.makeWatchRun = makeWatchRun;
function updateFile(instance, filePath) {
    filePath = path.normalize(filePath);
    var file = instance.files[filePath] || instance.otherFiles[filePath];
    if (file !== undefined) {
        file.text = utils_1.readFile(filePath) || '';
        file.version++;
        instance.version++;
        instance.modifiedFiles[filePath] = file;
        if (instance.watchHost) {
            instance.watchHost.invokeFileWatcher(filePath, instance.compiler.FileWatcherEventKind.Changed);
        }
    }
}
