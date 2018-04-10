/**
 * @author happygrammer
 */
let mynum: any = "2017";
let num1 = + mynum;
let num2 = Number(mynum);
let num3 = parseInt(mynum);
console.log(`num1=${num1}, ${typeof num1}`);
console.log(`num2=${num2}, ${typeof num2}`);
console.log(`num3=${num3}, ${typeof num3}`);

let num4: number = <number>mynum;
let num5: number = mynum as number;
console.log(`num4=${num4}, ${typeof num4}`);
console.log(`num5=${num5}, ${typeof num5}`);

let myAlias: any = "happy";
let num6: string = <any>myAlias;
let num7: any = myAlias as string;
console.log(`num6=${num6}, ${typeof num6}`);
console.log(`num7=${num7}, ${typeof num7}`);