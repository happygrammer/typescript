/**
 * @author happygrammer
 */
class Cube {
    // #1 생성자 매개변수 선언
    constructor(public width: number, private length: number, protected height: number) { }

    // #2 직육면체 부피 구하기
    getVolume() {
        return this.width * this.length * this.height;
    }
}

let [cWidth, cLength, cHeight] = [1, 2, 3]; // 가로, 세로, 높이
let cube = new Cube(cWidth, cLength, cHeight);
console.log("1번 세로 : ", cube.width, "cm"); // length, height는 접근 불가
console.log("2번 부피 : ", cube.getVolume(), "ml");