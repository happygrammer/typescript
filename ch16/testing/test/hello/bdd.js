"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hello_1 = require("./hello");
var assert = require("assert");
describe('동일한 숫자인지를 테스트', function () {
    before(function () {
        // 모든 테스트가 실행 되기 전에 한번만 실행
    });
    after(function () {
        // 모든 테스트가 끝마친 후 한번만 실행
    });
    beforeEach(function () {
        // 각 테스트가 실행하기 전마다 수행
    });
    afterEach(function () {
        // 각 테스트가 실행되고 나서 마다 수행
    });
    describe('hello()', function () {
        it('1과 동일한지', function () {
            assert.equal(1, hello_1.default(1));
        });
        it('2와 동일한지', function () {
            assert.equal(2, hello_1.default(2));
        });
        it('3와 동일한지', function () {
            assert.equal(3, hello_1.default(3));
        });
    });
});
