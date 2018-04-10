function concat6<T extends string | number>(strs: T, strs2: T): T;
function concat6(strs: any, strs2: any) {
    return strs + strs2;
}

console.log(concat6<string | number>("abc", 123));