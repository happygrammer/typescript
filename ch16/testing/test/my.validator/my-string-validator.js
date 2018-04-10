"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
