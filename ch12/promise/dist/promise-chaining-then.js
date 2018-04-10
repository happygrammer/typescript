var chainingPromise = new Promise(function (resolve, reject) {
    resolve(1);
}).then(function (value) {
    console.log(value); // 1
    return 2;
})
    .then(function (value) {
    console.log(value); // 2
    throw 'Exception!';
})["catch"](function (e) {
    console.log(e); // Exception!
});
