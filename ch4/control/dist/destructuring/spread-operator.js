let toConcatArray = [1, 2];
let concatedArray = [...toConcatArray, 3, 4];
console.log("1번 : ", concatedArray);
let [firstItems, ...restItems] = [10, 20, 30];
console.log("2번 : ", firstItems);
console.log("3번 : ", restItems);
console.log("4번 : ", restItems[0]);
