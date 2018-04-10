let arrObj = [1, 2];
let itObj = arrObj[Symbol.iterator]();
console.log("1:", typeof itObj);
console.log("2:", itObj.next());
console.log("3:", itObj.next());
console.log("4:", itObj.next());
