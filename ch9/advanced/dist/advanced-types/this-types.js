class AddCalc {
    constructor(value = 0) {
        this.value = value;
    }
    add(operand) {
        this.value += operand;
        return this;
    }
}
class MyCalc extends AddCalc {
    multiply(operand) {
        this.value *= operand;
        return this;
    }
}
let calc = new MyCalc(3).multiply(5).add(10);
console.log(calc.value);
