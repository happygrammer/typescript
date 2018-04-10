"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Calculator = /** @class */ (function () {
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
exports.default = Calculator;
