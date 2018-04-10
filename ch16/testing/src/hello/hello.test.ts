/// <reference path="../../node_modules/@types/mocha/index.d.ts" />
import * as mocha from 'mocha';

import * as chai from 'chai';
import hello from "./hello";

describe('hello 테스트',() => {
    it('동일한 문자를 반환하는 지를 테스트', ()=>{        
        chai.expect(hello("world")).to.be.equals("world");
    })
})