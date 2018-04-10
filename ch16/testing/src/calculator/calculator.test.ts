import * as mocha from 'mocha';
import Calculator from "./calculator";
import chai = require('chai');
let expect = chai.expect;

describe('계산기 사칙 연산', () => {
    let calc: Calculator;

    beforeEach(function () {
        calc = new Calculator();
    });

    describe('add 테스트', () => {
        it('add 테스트', () => {
            expect(calc.add(1, 2)).to.equal(3); // 일반 값
            expect(calc.add(10.0, +20.0)).to.equal(30.0); // 특이 값            
        })

        it("add 테스트", function (done) {
            if (calc.add(10, 20) != 30) {
                throw new Error("10+20=30 이어야 합니다.");
            } else {
                done();
            }
        })        
    });

    it('subtract 테스트', () => {
        expect(calc.subtract(10, 5)).to.equal(5);
        expect(calc.subtract(10, -5)).to.equal(15);
    })

    it('multiply 테스트', () => {
        expect(calc.multiply(10, 3)).to.equal(30);
    })

    it('divide 테스트', () => {
        expect(calc.divide(10, 2)).to.equal(5);
    })

    it('power 테스트', () => {
        expect(calc.power(10, 2)).to.equal(100);        
    })
});