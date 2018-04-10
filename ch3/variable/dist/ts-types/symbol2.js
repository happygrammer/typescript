const uniqueKey = Symbol();
let obj = {};
obj[uniqueKey] = 1234;
console.log(obj[uniqueKey]);
console.log(obj);
