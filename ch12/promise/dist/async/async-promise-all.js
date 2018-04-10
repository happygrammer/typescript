function delay2(msg) {
    var ms = Math.floor(Math.random() * 1000) + 1;
    return new Promise(function (resolve) {
        setTimeout(resolve, ms, msg);
    }).then();
}
function add(a, b) {
    return a + b;
}
function sync3() {
    var p1 = delay2("1");
    var p2 = add(1, 1);
    var p3 = delay2("3");
    var p4 = add(2, 2);
    Promise.all([p1, p2, p3, p4]).then(function (values) {
        console.log(values);
    });
}
sync3();
