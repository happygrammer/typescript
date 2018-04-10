"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var expect = require('chai').expect, jsdom = require('jsdom').jsdom;
var fs = require("fs");
describe('검증기 패턴이 유효성 테스트', function () {
    var $;
    before(function () {
        var html = fs.readFileSync("src/dom/index-pattern.html", "utf-8");
        var document = jsdom(html);
        var window = document.defaultView;
        $ = require('jquery')(window);
    });
    describe('ID의 패턴 검증', function () {
        var pattern, patt;
        before(function () {
            pattern = $('input[name=userID]').attr("pattern");
            patt = new RegExp(pattern);
        });
        it('통과 테스트', function () {
            expect(patt.test("abc")).eql(true);
            expect(patt.test("abcD")).eql(true);
        });
        it('실패 테스트', function () {
            expect(patt.test("ab")).eql(false);
            expect(patt.test("0ab")).eql(false);
            expect(patt.test("abcdef")).eql(false);
        });
    });
    it('비밀번호의 패턴 검증 테스트', function () {
        var pattern = $('input[name=userPW]').attr("pattern");
        var patt = new RegExp(pattern);
        // 통과 테스트
        expect(patt.test("0ab")).eql(true);
        expect(patt.test("0abcd")).eql(true);
        // 실패 테스트
        expect(patt.test("0")).eql(false);
        expect(patt.test("0abcde")).eql(false);
    });
});
