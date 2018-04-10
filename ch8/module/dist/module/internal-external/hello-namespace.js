/**
 * @author happygrammer
 */
var Hello;
(function (Hello) {
    function print() {
        console.log("hello!");
    }
})(Hello || (Hello = {}));
