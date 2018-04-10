let twoParameter = (a, b) => a + b;
let oneParameter = (a) => a;
twoParameter = oneParameter;
console.log(`1번 : ${twoParameter("hello", "world")}`);
let twoProperty = () => ({ name: "happy", country: "korea" });
let oneProperty = () => ({ name: "happy" });
oneProperty = twoProperty;
console.log(`2번 : ${JSON.stringify(oneProperty())}`);
