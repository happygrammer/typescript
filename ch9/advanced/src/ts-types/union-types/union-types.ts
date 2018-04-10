/**
 * @author happygrammer
 */
function check(p: string | number | boolean): string | number | boolean {
    if (typeof p === "string") {
        // p가 string 타입일때의 처리
        return p;
    }
    else if (typeof p === "number") {
        // p가 number 타입일때의 처리
        return p;
    }
    else {
        // p가 boolean 타입일때의 처리
        return p;
    }
}

console.log(typeof check(1), check(1));
console.log(typeof check("hello"), check("hello"));
console.log(typeof check(true), check(true));