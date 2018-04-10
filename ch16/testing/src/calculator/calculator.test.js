"use strict";
exports.__esModule = true;
var calculator_1 = require("./calculator");
var chai = require("chai");
var expect = chai.expect;
describe('계산기 사칙 연산', function () {
    var calc;
    beforeEach(function () {
        calc = new calculator_1["default"]();
    });
    describe('add 테스트', function () {
        it('add 테스트', function () {
            expect(calc.add(1, 2)).to.equal(3); // 일반 값
            expect(calc.add(10.0, +20.0)).to.equal(30.0); // 특이 값            
        });
        it("add 테스트", function (done) {
            if (calc.add(10, 20) != 30) {
                throw new Error("10+20=30 이어야 합니다.");
            }
            else {
                done();
            }
        });
    });
    it('subtract 테스트', function () {
        expect(calc.subtract(10, 5)).to.equal(5);
        expect(calc.subtract(10, -5)).to.equal(15);
    });
    it('multiply 테스트', function () {
        expect(calc.multiply(10, 3)).to.equal(30);
    });
    it('divide 테스트', function () {
        expect(calc.divide(10, 2)).to.equal(5);
    });
    it('power 테스트', function () {
        expect(calc.power(10, 2)).to.equal(100);
    });
});
