/**
 * @author happygrammer
 */
function delay2(msg: string) {
    let ms: number = Math.floor(Math.random() * 1000) + 1;
    return new Promise(function (resolve) {
        setTimeout(resolve, ms, msg);
    }).then(function (v) {
        console.log(v, ms + "ms");
    });
}

async function sync2() {
    let start = new Date().getTime();

    await delay2("a");
    await delay2("b");
    await delay2("c");

    var end = new Date().getTime();
    console.log("시간 : ", end - start + "ms");
}

sync2();