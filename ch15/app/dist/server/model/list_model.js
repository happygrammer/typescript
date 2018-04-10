"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ItemList {
    getList() {
        let arr = [];
        arr.push({ title: "타입스크립트 퀵스타트", intro: "초보자도 쉽게 타입스크립트를 이해할 수 있게 설명한 책이다.", url: "https://books.google.com" });
        arr.push({ title: "꼼꼼히살펴보는 타입스크립트", intro: "타입스크립트는 새로운 패러다임을 제시하는 언어다.", url: "https://books.google.com" });
        arr.push({ title: "타입스크립트 실무 프로그래밍", intro: "타입스크립트는 대규모 애플리케이션 개발에 적합한 언어다.", url: "https://books.google.com" });
        arr.push({ title: "예제로 시작하는 타입스크립트", intro: "타입스크립트는 마이크로소프트가 만든 차세대 자바스크립트다.", url: "https://books.google.com" });
        return arr;
    }
}
exports.default = ItemList;
