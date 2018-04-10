var Rx = require('@reactivex/rxjs');
const stream$ = Rx.Observable.from([1, 2, 3, 4, 5]);
const operatorResult$ = stream$.map(val => val * 2);
const streamSubscribe = operatorResult$.subscribe(val => console.log(val));
/*
스트림 입력 데이터에 한개의 연산자를 사용했습니다.
*/ 
