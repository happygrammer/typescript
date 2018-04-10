/**
 * @author happygrammer
 */
// 익명 함수에 선언된 매개변수가 다른 경우
let funcSub = (a: string, b: string) => a + b; // 상위 타입
let funcUpper = (a: string) => a; // 하위 타입

funcSub = funcUpper; // 상위 타입 = 하위 타입
// funcUpper = funcSub; // 에러 - 타입 호환 불가
console.log(`${funcSub("hello", "world")}`); // 실제로 funcUpper 함수가 호출 됨