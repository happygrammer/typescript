var basicRejectPromise = new Promise(function (resolve, reject) {
    // reject를 통해 예외 상황을 발생 시킴
    reject("Error!");
})["catch"](function (err) {
    // 예외 상황 처리
    console.log(err);
});
