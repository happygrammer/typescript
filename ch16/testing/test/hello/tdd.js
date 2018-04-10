"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hello_1 = require("./hello");
var assert = require("assert");
suite('동일한 숫자인지를 테스트', function () {
    setup(function () {
        // 객체를 생성 하거나 관련 변수를 초기화
    });
    suite('hello()', function () {
        test('1과 동일한지', function () {
            assert.equal(1, hello_1.default(1));
        });
        test('2와 동일한지', function () {
            assert.equal(2, hello_1.default(2));
        });
        test('3와 동일한지', function () {
            assert.equal(3, hello_1.default(3));
        });
    });
});
