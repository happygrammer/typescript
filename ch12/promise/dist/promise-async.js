var promiseAsync = new Promise(function (resolve, reject) {
    var sec = (Math.floor(Math.random() * 5) + 1);
    setTimeout(function (isTrue) {
        if (isTrue) {
            resolve(sec);
        }
    }, sec * 1000, true);
}).then(function (res) {
    console.log(res + "s");
});
