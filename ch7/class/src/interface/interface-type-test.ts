/**
 * @author happygrammer
 */
interface ICar { name: string; }
class MyCar { }

let mCar: ICar = { name: "car" };
console.log(typeof mCar);  // object
console.log(typeof MyCar); // function
// console.log(typeof ICar); // 유효하지 않습니다.