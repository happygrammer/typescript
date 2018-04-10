"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validator_1 = require("./validator");
var chai = require("chai");
var expect = chai.expect;
describe('문자열 검증하기', function () {
    it('URL - 주소에 대한 true 테스트', function () {
        expect(validator_1.Validator.isURL("http://wikibook.co.kr")).to.be.true;
    });
    it('URL - 형식에 대한 false 테스트', function () {
        expect(validator_1.Validator.isURL("wikibook.co.kr")).to.be.false;
        expect(validator_1.Validator.isURL("http:wikibook.co.kr")).to.be.false;
        expect(validator_1.Validator.isURL("http:\\wikibook.co.kr")).to.be.false;
    });
});
describe('숫자 검증하기', function () {
    it('폰 번호 - 번호에 대한 true 테스트', function () {
        expect(validator_1.Validator.isPhone("010-1111-1111")).to.be.true;
        expect(validator_1.Validator.isPhone("010-111-1111")).to.be.true;
        expect(validator_1.Validator.isPhone("016-111-1111")).to.be.true;
        expect(validator_1.Validator.isPhone("019-111-1111")).to.be.true;
    });
    it('폰 번호 - 형식에 대한 false 테스트', function () {
        expect(validator_1.Validator.isPhone("0123-111-1111")).to.be.false;
        expect(validator_1.Validator.isPhone("010-11-1111")).to.be.false;
        expect(validator_1.Validator.isPhone("010-11-11111")).to.be.false;
    });
    it('폰 번호 - 앞자리에 대한 false 테스트', function () {
        expect(validator_1.Validator.isPhone("012-1111-1111")).to.be.false;
        expect(validator_1.Validator.isPhone("013-1111-1111")).to.be.false;
        expect(validator_1.Validator.isPhone("014-1111-1111")).to.be.false;
        expect(validator_1.Validator.isPhone("015-1111-1111")).to.be.false;
    });
});
