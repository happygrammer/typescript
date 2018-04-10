/**
 * @author happygrammer
 */
class AddCalc {
    public constructor(public value: number = 0) { }

    public add(operand: number): this {
        this.value += operand;
        return this;
    }

}

class MyCalc extends AddCalc {
    public multiply(operand: number): this {
        this.value *= operand;
        return this;
    }
}

let calc = new MyCalc(3).multiply(5).add(10);
console.log(calc.value);