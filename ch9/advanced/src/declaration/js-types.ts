/**
 * @author happygrammer
 */
let myBoolean = true;             // boolean 타입
let myNumber = 10;                // number 타입
let myString = "hello";           // string 타입
let myUndefined;                  // undefined 타입
let myNull = null;                // null 타입(객체 타입이 비어있다면)
let myObject = { name: "happy" }; // 객체 타입(객체 리터럴)
let myObject2 = [1, 2, 3];        // 객체 타입(배열)
let myFunction = function (a) { return a; }; // 함수 타입

console.log("boolean : " + typeof myBoolean);
console.log("number : " + typeof myNumber);
console.log("string : " + typeof myString);
console.log("undefined : " + typeof myUndefined);
console.log("null : " + typeof myNull, myNull === null);
console.log("object : " + typeof myObject, typeof myObject2);
console.log("function : " + typeof myFunction);
console.log("undefined == null : " + (undefined == null));
console.log("undefined === null : " + (undefined === null));

/*
let myBoolean: boolean = true;
let myNumber: number = 10;
let myString: string = "hello";
let myUndefined: undefined;
let myNull: null = null;
let myObject: { name: string } = { name: "happy" };
let myObject2: number[] = [1, 2, 3];
let myFunction: (a: number) => number = function (a) { return a; };
*/
/*
let myNullType: null = null;
let myNullType2: number = null;
*/
/*
let myNull2 = {}; // null 값
let myNull3 = []; // null 값
let myNull4 = 0; // null 값
let myNull5 = ""; // null 값
*/
/*
let myBool = true; // boolean 타입
let myNum = 10; // number 타입
let myString = "hello"; // string 타입
let myNull: null = null; // null 타입
let myUndefined: undefined = undefined; // undefined;
let myObject: object = { a: 1, b: 2 };
let myFunction: object = (a) => { return a; };
let myFunction: object = (a) => { return a; };*/