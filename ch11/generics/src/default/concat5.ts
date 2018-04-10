function concat5<T>(strs: T, strs2: T): T;
function concat5(strs: any, strs2: any) {
    return strs + strs2;
}

console.log(concat5<string>("abc", "123"));
// console.log(concat5("abc", 123));

/*
타입 인자인 <string>을 생략해 주면 매개 변수를 기준으로 추론하고 타입 인자를 추가해 주면 타입 인자를 기준으로 타입을 인식
*/