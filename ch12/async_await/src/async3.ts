/**
 * @author happygrammer
 */
function delay3(msg, ms): Promise<any> {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(msg);
        }, ms);
    }).then(function (v) {
        console.log(v + " " + ms + "ms");
        return v;
    });
};

async function sync3() {
    var start = new Date().getTime();
    let result1: Promise<any> = await delay3("a", 1000);
    let result2: Promise<any> = await delay3(result1 + "b", 500);
    let result3: Promise<any> = await delay3(result2 + "c", 100);

    var end = new Date().getTime();
    console.log("시간 : ", end - start + "ms");
}

sync3();