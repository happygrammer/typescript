/**
 * @author happygrammer
 */
interface ICount {
    readonly count: number; // readonly는 인터페이스 멤버를 선언할 수 있음
}
class TestReadonly implements ICount {
    readonly count: number; // readonly는 클래스의 멤버 변수에 선언할 수 있음
    static readonly count2: number; // readonly 앞에 static 지정 가능
    private readonly count3: number; // readonly 앞에 접근 제한자 지정 가능
    readonly count4: number = 0; // readonly로 선언되면 초기화 가능
    getCount() {
        // this.count4 = 0; // readonly로 선언된 멤버 변수는 재할당 불가
        // readonly count5: number = 0; // readonly는 메서드에 선언할 수 없음
    }
}

function getCount() {
    // readonly count: number; // readonly는 함수에 선언할 수 없음
}

// readonly은 객체 리터럴의 속성 앞에 지정 가능
let literalObj: { readonly alias: string } = { alias: "happy" };
// literalObj.name = "happy"; // readonly로 지정된 타입으로 인해 할당 불가
// literalObj = "test"; // readonly로 지정된 타입으로 인해 할당 불가