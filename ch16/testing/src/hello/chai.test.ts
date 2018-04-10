import * as mocha from 'mocha';
import * as chai from 'chai';

let assert = chai.assert;
let should = chai.should();
let expect = chai.expect;
let fruit = 'apple', 
    fruits = { favorite: ['apple','banana','mango'] };

describe('chai 테스트', () => {
    it('assert test', () => {
        assert.typeOf(fruit, 'string');
        assert.typeOf(fruit, 'string', 'fruit의 타입은 string입니다.');
        assert.equal(fruit, 'apple', 'fruit 값은 apple입니다.');
        assert.lengthOf(fruit, 5, 'fruit 값의 길이는 3입니다.');
        assert.lengthOf(fruits.favorite, 3, 'fruits.favorite의 요소 개수는 3개입니다.');
    })

    it('expect test', () => {
        expect(fruit).to.be.a('string');
        expect(fruit).to.equal('apple');
        expect(fruit).to.have.lengthOf(5);
        expect(fruits).to.have.property('favorite').with.lengthOf(3);
    })

    it('should test', () => {
        fruit.should.be.a('string');
        fruit.should.equal('apple');
        fruit.should.have.lengthOf(5);
        fruits.should.have.property('favorite').with.lengthOf(3);
    })
});