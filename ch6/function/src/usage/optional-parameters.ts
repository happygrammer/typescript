/**
 * @author happygrammer
 */
function sum2(a: number, b?: number) {
    if (b === undefined) {
        b = 0;
    }
    return a + b;
}

console.log(sum2(1));