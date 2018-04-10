var mPromise = new Promise(function (resolve, reject) {
    resolve(1);
});
mPromise.then(function (res) {
    console.log(typeof res, res);
});
