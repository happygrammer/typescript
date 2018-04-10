/// <reference path="../../node_modules/@types/node/index.d.ts" />
/// <reference path="../../node_modules/@types/mocha/index.d.ts" />
import * as mocha from 'mocha';
import hello from './hello';

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
            assert.equal(1, hello(1));
        });

        it('2와 동일한지', function () {
            assert.equal(2, hello(2));
        });

        it('3와 동일한지', function () {
            assert.equal(3, hello(3));
        });
    });
});