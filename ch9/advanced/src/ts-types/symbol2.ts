/**
 * @author happygrammer
 * tsconfig.json의 target 속성을 es6로 맞추고 테스트합니다.
 */
const uniqueKey = Symbol();
let obj = {};

obj[uniqueKey] = 1234;
console.log(obj[uniqueKey]);
console.log(obj);