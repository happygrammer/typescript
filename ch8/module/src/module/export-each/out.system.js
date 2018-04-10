System.register("export", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function saveInfo(card, name) { }
    exports_1("saveInfo", saveInfo);
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("load", ["export"], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var export_1, card;
    return {
        setters: [
            function (export_1_1) {
                export_1 = export_1_1;
            }
        ],
        execute: function () {
            card = {};
            export_1.saveInfo(card, "happy");
        }
    };
});
