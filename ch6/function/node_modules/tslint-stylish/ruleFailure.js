"use strict";
/// <reference path="../typings/stylish.d.ts" />
var _ = require("lodash");
var RuleFailure = (function () {
    function RuleFailure(ruleFailure) {
        this.fileName = ruleFailure.fileName;
        this.ruleName = ruleFailure.ruleName;
        this.failure = ruleFailure.failure;
        if (ruleFailure.startPosition.lineAndCharacter) {
            var start = ruleFailure.startPosition;
            this.startPosition = {
                position: start.position,
                line: start.lineAndCharacter.line,
                character: start.lineAndCharacter.character
            };
            var end = ruleFailure.endPosition;
            this.endPosition = {
                position: end.position,
                line: end.lineAndCharacter.line,
                character: end.lineAndCharacter.character
            };
        }
        else {
            this.startPosition = ruleFailure.startPosition;
            this.endPosition = ruleFailure.endPosition;
        }
    }
    RuleFailure.ruleFailureFactory = function (linterOutputArray) {
        return _.map(linterOutputArray, function (lint) { return new RuleFailure(lint); });
    };
    RuleFailure.prototype.getFileName = function () { return this.fileName; };
    RuleFailure.prototype.getRuleName = function () { return this.ruleName; };
    RuleFailure.prototype.getFailure = function () { return this.failure; };
    RuleFailure.prototype.getStartPosition = function () { return this.startPosition; };
    RuleFailure.prototype.getEndPosition = function () { return this.endPosition; };
    return RuleFailure;
}());
module.exports = RuleFailure;
