/**
 * @author happygrammer
 */
function nevertest(value: string | number) {
    if (typeof value === "string") {
        return value;
    }
    else if (typeof value === "number") {
        return value;
    } else {
        return value;// 닿을 수 없는 코드
    }
}
console.log(nevertest("test"));