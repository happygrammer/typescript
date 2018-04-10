var getInfo1 = new Promise(function (resolve, reject) {
    //비동기 처리 후 콜백 함수 호출
    setTimeout(function () {
        resolve("hello1");
    }, 1000);
}).then(function (res) { return res; });
var getInfo2 = new Promise(function (resolve, reject) {
    //비동기 처리 후 콜백 함수 호출
    var isSuccess = true;
    var data = { greetings: "hello2" };
    setTimeout(function () {
        resolve(data);
    }, 500);
});
Promise.all([
    getInfo1,
    getInfo2,
])
    .then(function (_a) {
    var result1 = _a[0], result2 = _a[1];
    console.log(result1);
    console.log(result2.greetings);
})["catch"](function (err) {
    console.log(err);
});
