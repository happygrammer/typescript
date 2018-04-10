/**
 * @author happygrammer
 */
function delay(msg: string) {
    let ms: number = Math.floor(Math.random() * 1000) + 1;
    setTimeout(function () {
        console.log(msg, ms + "ms");
    }, ms);
}

function async() {
    delay("a");
    delay("b");
    delay("c");
}

async();