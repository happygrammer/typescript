let myMap = new Map();
myMap.set(1, "one");
myMap.set("2", "two");

// 내장 이터레이터와 for of를 이용해 맵을 순회하기
for (let v of myMap) {
    console.log(v);
}

// 내장 이터레이터를 이용해 맵을 순회하기
let mapIter = myMap[Symbol.iterator]();
console.log(mapIter.next().value); // [1, 'one']
console.log(mapIter.next().value); // ['2', 'two']