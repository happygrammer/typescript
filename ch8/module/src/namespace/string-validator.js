/// <reference path="number-validator.ts" />
var Validator;
(function (Validator) {
    var StringValidator = (function () {
        function StringValidator() {
        }
        StringValidator.prototype.isString = function (s) {
            if (typeof s === 'string' || s instanceof String) {
                return true;
            }
            else {
                return false;
            }
        };
        return StringValidator;
    }());
    Validator.StringValidator = StringValidator;
})(Validator || (Validator = {}));
var stringValidator = new Validator.StringValidator();
var numberValidator = new Validator.NumberValidator();
console.log("string : " + stringValidator.isString("hello"));
console.log("number : " + numberValidator.isNumeric(123));
