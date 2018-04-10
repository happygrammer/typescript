var add = require("./calc").add;
exports.increment = function (val) {
    return add(val, 1);
};