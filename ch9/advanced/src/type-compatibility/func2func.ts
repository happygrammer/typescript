/**
 * @author happygrammer
 */
// 익명 함수에 선언된 매개변수가 다른 경우
let twoParameter = (a: string, b: string) => a + b; // 상위 타입
let oneParameter = (a: string) => a; // 하위 타입

twoParameter = oneParameter; // 상위 타입 <- 하위 타입 
// oneParameter = twoParameter; // 에러 - 타입 호환 불가
console.log(`1번 : ${twoParameter("hello", "world")}`); // 실제로 oneParameter 함수가 호출 됨

// 익명 함수가 반환하는 객체 리터럴이 다른 경우
let twoProperty = () => ({ name: "happy", country: "korea" }); // 상위 타입
let oneProperty = () => ({ name: "happy" }); // 하위 타입

oneProperty = twoProperty; // 하위 타입 <- 상위 타입 
// twoProperty = oneProperty; // 에러 - 타입 호환 불가

// 실제로 twoProperty 함수가 호출 됨
console.log(`2번 : ${JSON.stringify(oneProperty())}`);