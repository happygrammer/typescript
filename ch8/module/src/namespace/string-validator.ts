/**
 * @author happygrammer
 */
/// <reference path="number-validator.ts" />

namespace Validator {
    export class StringValidator {
        isString(s: any): boolean {
            if (typeof s === "string" || s instanceof String) {
                return true;
            } else {
                return false;
            }
        }
    }
}

let stringValidator = new Validator.StringValidator();
let numberValidator = new Validator.NumberValidator();
console.log("string : " + stringValidator.isString("hello"));
console.log("number : " + numberValidator.isNumeric(123));