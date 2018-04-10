let funcSub = (a, b) => a + b;
let funcUpper = (a) => a;
funcSub = funcUpper;
console.log(`${funcSub("hello", "world")}`);
