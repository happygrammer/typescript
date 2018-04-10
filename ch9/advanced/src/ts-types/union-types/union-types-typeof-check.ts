/**
 * @author happygrammer
 */
function myIndexOf2(x: number | string, y: string) {
    if (typeof x === "string") {
        return x.indexOf(y); // x가 string 타입일때
    }
    else {
        return -1; // x가 number 타입일때
    }
}

console.log(myIndexOf2("hello", "e"));