"use strict";
exports.__esModule = true;
var Calculator = (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (a, b) {
        var result = a + b;
        return result;
    };
    Calculator.prototype.subtract = function (a, b) {
        var result = a - b;
        return result;
    };
    Calculator.prototype.multiply = function (a, b) {
        var result = a * b;
        return result;
    };
    Calculator.prototype.divide = function (a, b) {
        var result = a / b;
        return result;
    };
    Calculator.prototype.power = function (a, b) {
        var result = a;
        for (var x = 2; x <= b; x++) {
            result *= a;
        }
        return result;
    };
    return Calculator;
}());
exports["default"] = Calculator;
