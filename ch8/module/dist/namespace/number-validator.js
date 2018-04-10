/**
 * @author happygrammer
 */
var Validator;
(function (Validator) {
    class NumberValidator {
        isNumeric(s) {
            if (typeof s === "number" || s instanceof Number) {
                return true;
            }
            else {
                return false;
            }
        }
    }
    Validator.NumberValidator = NumberValidator;
})(Validator || (Validator = {}));
