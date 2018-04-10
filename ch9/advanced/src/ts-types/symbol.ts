/**
 * @author happygrammer
 * tsconfig.json의 target 속성을 es6로 맞추고 테스트합니다.
 */
const hello = Symbol("hello");
const hello2 = Symbol("hello");
console.log(hello === hello2);
console.log(hello, hello2);
console.log(typeof hello);