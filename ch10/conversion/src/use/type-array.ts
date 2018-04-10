/**
 * @author happygrammer
 */
type MyArrayType = Array<number | boolean>;
let myArray: MyArrayType = [1, true];
console.log(myArray.toString());
console.log(typeof myArray[0], typeof myArray[1]);