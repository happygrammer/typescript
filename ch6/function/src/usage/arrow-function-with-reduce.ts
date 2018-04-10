/**
 * @author happygrammer
 */
function getSum(nums: number[]): number {
    let sum: number = nums.reduce((a, b) => { return a + b; });
    return sum;
}

let numSum = getSum([1, 2, 3, 4, 5]);
console.log(`numSum=${numSum}`);