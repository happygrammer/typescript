/**
 * @author happygrammer
 */
const promiseAsync = new Promise((resolve, reject) => {
    let sec: number = (Math.floor(Math.random() * 5) + 1);
    setTimeout(function (isTrue) {
        if(isTrue){
            resolve(sec);
        }
    }, sec * 1000, true);
}).then(res => {
    console.log(res + "s");
});