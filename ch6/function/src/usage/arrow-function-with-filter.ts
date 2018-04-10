/**
 * @author happygrammer
 */
let numberList = [1, 2, 3, 4, 5];
numberList = numberList.filter(n => {
  return n % 2 === 0;
});
console.log(numberList);

// ES6에 추가 된 특징