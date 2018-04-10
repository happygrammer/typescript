let arr = [1, 2];
let arr2 = [...arr, 3, 4];
console.log("1번 : ", arr2);
let [firstItem, ...rest] = [10, 20, 30];
console.log("2번 : ", firstItem);
console.log("3번 : ", rest);
console.log("4번 : ", rest[0]);
