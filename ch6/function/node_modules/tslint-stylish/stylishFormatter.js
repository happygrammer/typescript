/// <reference path="../typings/stylish.d.ts"/>
"use strict";
var _ = require("lodash");
var Reporter = require("./reporter");
var Formatter = (function () {
    function Formatter() {
        this.files = {};
    }
    Formatter.prototype.format = function (failures) {
        this.invertLints(failures);
        var output = "";
        _.forEach(this.files, function (linterOutput) {
            var reporter = new Reporter(linterOutput, linterOutput[0].fileName, { bell: false });
            output += reporter.toString();
        });
        return output;
    };
    Formatter.prototype.invertLints = function (failures) {
        var _this = this;
        failures.forEach(function (failure) {
            if (!_this.files[failure.fileName]) {
                _this.files[failure.fileName] = [];
            }
            _this.files[failure.fileName].push(failure);
        });
    };
    return Formatter;
}());
exports.Formatter = Formatter;
