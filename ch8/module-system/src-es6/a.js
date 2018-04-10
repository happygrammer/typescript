export function unique(arr) {
    console.log("a 모듈");
    return arr.filter((v, i, a) => a.indexOf(v) === i);
}
