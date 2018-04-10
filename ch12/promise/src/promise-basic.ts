/**
 * @author happygrammer
 */
const mPromise = new Promise((resolve, reject) => {
    resolve(1);
});

mPromise.then(res => {
    console.log(typeof res, res);
});