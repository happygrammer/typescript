"use strict";
exports.__esModule = true;
var My;
(function (My) {
    var StringValidator;
    (function (StringValidator) {
        function isURL(url) {
            return /^(http|https):\/\/[^ "]+$/.test(url);
        }
        StringValidator.isURL = isURL;
    })(StringValidator = My.StringValidator || (My.StringValidator = {}));
})(My = exports.My || (exports.My = {}));
