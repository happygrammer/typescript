define("export", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    function saveInfo(card, name) { }
    exports.saveInfo = saveInfo;
});
define("load", ["require", "exports", "export"], function (require, exports, export_1) {
    "use strict";
    exports.__esModule = true;
    var card = {};
    export_1.saveInfo(card, "happy");
});
