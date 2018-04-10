/**
 * @author happygrammer
 */
let myNum: any = "2017";

// 타입 캐스팅
let num1 = + myNum;
let num2 = Number(myNum);
let num3 = parseInt(myNum);
console.log(`num1=${num1}, ${typeof num1}`);
console.log(`num2=${num2}, ${typeof num2}`);
console.log(`num3=${num3}, ${typeof num3}`);

// 타입 호환
let num4: number = <number>myNum;
let num5: number = myNum as number;
console.log(`num4=${num4}, ${typeof num4}`);
console.log(`num5=${num5}, ${typeof num5}`);