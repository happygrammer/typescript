let mapArr = [];
function put(idx, str) {
    mapArr[idx] = str;
}
function get(idx) {
    return mapArr[idx];
}
put(1, "hello");
console.log(get(1));
