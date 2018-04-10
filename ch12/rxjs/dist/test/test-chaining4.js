var Rx = require('@reactivex/rxjs');
class Third {
    start() {
        const $numbers = Rx.Observable.of(1000); // 첫번째 HTTP에 대한 가상의 응답 데이터를 생성하여 옵저버블 생성
        const $Info = Rx.Observable.of(2000); //두번째 HTTP 가상의 응답 데이터을 생성하여 옵저버블 생성
        $numbers.map((v) => {
            console.log(v);
            setTimeout(function (v) {
                console.log("첫번째 처리=========>", v);
                return v + 100;
            }, 1000, v);
        }).subscribe(function (x) {
            console.log("첫번째 처리", x);
        });
        const secondProcessing = $Info.map((v) => {
            console.log(v);
            setTimeout(function (v) {
                console.log("두번째 처리=========>", v);
                return v + 100;
            }, 30, v);
        }).subscribe(function (x) {
            console.log("두번째 처리", x);
        });
        $Info.concat($numbers).subscribe(x => console.log('next: %s', x), e => console.log('error: %s', e), () => console.log('completed'));
    }
}
var third = new Third();
third.start();
