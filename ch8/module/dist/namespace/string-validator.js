/**
 * @author happygrammer
 */
/// <reference path="number-validator.ts" />
var Validator;
(function (Validator) {
    class StringValidator {
        isString(s) {
            if (typeof s === "string" || s instanceof String) {
                return true;
            }
            else {
                return false;
            }
        }
    }
    Validator.StringValidator = StringValidator;
})(Validator || (Validator = {}));
let stringValidator = new Validator.StringValidator();
let numberValidator = new Validator.NumberValidator();
console.log("string : " + stringValidator.isString("hello"));
console.log("number : " + numberValidator.isNumeric(123));
