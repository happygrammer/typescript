function concat4<T extends string>(strs: T, strs2: T) {
    console.log(typeof strs, strs);
    console.log(typeof strs2, strs2);    
    // return strs2 +strs2;
}

concat4("abc", "123"); // 타입 검사 진행