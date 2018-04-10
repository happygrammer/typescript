"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var My;
(function (My) {
    var NumberValidator;
    (function (NumberValidator) {
        function isPhone(input) {
            var regex = /^01([0|1|6|7|8|9]?)-\d{3,4}-\d{4}$/;
            return regex.test(input);
        }
        NumberValidator.isPhone = isPhone;
    })(NumberValidator = My.NumberValidator || (My.NumberValidator = {}));
})(My = exports.My || (exports.My = {}));
