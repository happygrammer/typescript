/// <reference path="../typings/stylish.d.ts" />
"use strict";
var chalk = require("chalk");
var table = require("text-table");
var logSymbols = require("log-symbols");
var _ = require("lodash");
var path = require("path");
var RuleFailure = require("./ruleFailure");
var Reporter = (function () {
    function Reporter(linterOutputArray, file, options) {
        this.parseOptions(options);
        this.parseFilename(file);
        this.ruleFailures = RuleFailure.ruleFailureFactory(linterOutputArray);
        this.count = this.ruleFailures.length;
    }
    Reporter.prototype.getFileName = function () { return this.fileName; };
    Reporter.prototype.getCount = function () { return this.count; };
    Reporter.prototype.getRuleFailures = function () { return this.ruleFailures; };
    Reporter.prototype.getOptions = function () { return this.options; };
    Reporter.prototype.toString = function () {
        var count = "    " + chalk.red(logSymbols.error) + " " +
            this.count + " error" +
            (this.ruleFailures.length > 1 ? "s" : "");
        var output = "\n" + chalk.underline(this.fileName) + "\n" +
            this.generateFailureStrings() +
            "\n\n" + count + "\n\n";
        if (this.options.bell) {
            output += "\x07";
        }
        return output;
    };
    Reporter.prototype.publish = function () {
        process.stdout.write(this.toString());
    };
    Reporter.prototype.generateFailureStrings = function () {
        var failures = [];
        if (this.options.sort) {
            this.ruleFailures = _.sortBy(this.ruleFailures, function (n) {
                return n.startPosition.line;
            });
        }
        this.ruleFailures.forEach(function (failure) {
            // Error positions are zero-based from tslint, and must be incremented by 1
            failures.push([
                "    ",
                chalk.gray("line " + (failure.getStartPosition().line + 1)),
                chalk.gray("col " + (failure.getStartPosition().character + 1)),
                chalk.red(failure.getFailure())
            ]);
        });
        return table(failures, { align: ["l", "l", "l", "l"] });
    };
    Reporter.prototype.parseOptions = function (options) {
        this.options = options || {};
        if (this.options.sort !== false) {
            this.options.sort = true;
        }
        if (this.options.bell !== false) {
            this.options.bell = true;
        }
        if (this.options.fullPath !== false) {
            this.options.fullPath = true;
        }
    };
    Reporter.prototype.parseFilename = function (file) {
        this.fileName = file.path || file;
        if (!this.options.fullPath) {
            this.fileName = path.basename(this.fileName);
        }
    };
    return Reporter;
}());
module.exports = Reporter;
