/**
 * @author happygrammer
 */
var MyInfo1;
(function (MyInfo1) {
    MyInfo1.name = "happy1";
    function getName2() {
        return MyInfo2.name2;
    }
    MyInfo1.getName2 = getName2;
})(MyInfo1 || (MyInfo1 = {}));
var MyInfo2;
(function (MyInfo2) {
    MyInfo2.name2 = "happy2";
    function getName() {
        return MyInfo1.name;
    }
    MyInfo2.getName = getName;
})(MyInfo2 || (MyInfo2 = {}));
console.log(MyInfo1.getName2());
console.log(MyInfo2.getName());
