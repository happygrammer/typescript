/**
 * @author happygrammer
 */
function colors(a) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    return a + " " + rest.join(" ");
}
// colors();
var color1 = colors("red");
var color2 = colors("red", "orange");
var color3 = colors("red", "orange", "yellow");
console.log("color1=" + color1 + "\ncolor2=" + color2 + "\ncolor3=" + color3);
