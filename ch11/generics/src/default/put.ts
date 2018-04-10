// happy
let mapArr = [];

function put<T, T2>(strs: T, strs2: T2): T;
function put(idx: any, str: any) {
    mapArr[idx] = str;
}

function get<T, T2>(idx: T): T2;
function get(idx: any) {
    return mapArr[idx];
}

put<number, string>(1, "hello");
console.log(get<number, string>(1));