var Validator;
(function (Validator) {
    var NumberValidator = (function () {
        function NumberValidator() {
        }
        NumberValidator.prototype.isNumeric = function (s) {
            if (typeof s === 'number' || s instanceof Number) {
                return true;
            }
            else {
                return false;
            }
        };
        return NumberValidator;
    }());
    Validator.NumberValidator = NumberValidator;
})(Validator || (Validator = {}));
