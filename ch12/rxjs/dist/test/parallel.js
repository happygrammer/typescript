var Rx = require('@reactivex/rxjs');
const $s11 = Rx.Observable.of('Hello1').map((v) => { console.log("첫번째 로직처리", v); return v; });
const $s22 = Rx.Observable.of('Hello2').delay(2000).map((v) => { console.log("두번째 로직처리", v); return v; });
const $s33 = Rx.Observable.of('Hello3').delay(2500).map((v) => { console.log("세번째 로직처리", v); return v; });
const $s44 = Rx.Observable.of('Hello4').delay(500).map((v) => { console.log("네번째 로직처리", v); return v; });
Rx.Observable.forkJoin([$s11, $s22, $s33, $s44]).subscribe(t => {
    console.log(t);
});
