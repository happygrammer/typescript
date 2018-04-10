var Rx = require('@reactivex/rxjs');
class ForkComponent {
    func1(v) {
        console.log("첫번째 로직처리", v);
        return v;
    }
    func2(v) {
        console.log("두번째 로직처리", v);
        return v;
    }
    func3(v) {
        console.log("세번째 로직처리", v);
        return v;
    }
    func4(v) {
        console.log("네번째 로직처리", v);
        return v;
    }
    pay() {
        const $s1 = Rx.Observable.of('Hello1').map(this.func1);
        const $s2 = Rx.Observable.of('Hello2').delay(2000).map(this.func2);
        const $s3 = Rx.Observable.of('Hello3').delay(2500).map(this.func3);
        const $s4 = Rx.Observable.of('Hello4').delay(500).map(this.func4);
        const example = Rx.Observable.forkJoin($s1, $s2, $s3, $s4);
        example.subscribe(val => {
            console.log(val);
        });
    }
}
var mm = new ForkComponent();
mm.pay();
/*
로직 처리를 할 때 시퀀스하게 실행되지 않습니다. 결과만 병렬로 출력해 줍니다.
HTTP로 get시 시퀀스하게 처리합니다.
체이닝 형식으로 시퀀스하게 실행되지 않습니다. 병렬로 시퀀스하게 실행하려면?
*/ 
