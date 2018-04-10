export default class Calculator {    
    add(a: number, b: number): number {
        let result = a + b;
        return result;
    }

    subtract(a: number, b: number): number {
        let result = a - b;
        return result;
    }

    multiply(a: number, b: number): number {
        let result = a * b;
        return result;
    }

    divide(a: number, b: number): number {
        let result = a / b;
        return result;
    }

    power(a: number, b: number): number {
        let result = a;
        for (let x = 2; x <= b; x++) {
            result *= a;
        }
        return result;
    }
}