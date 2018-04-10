var Rx = require('@reactivex/rxjs');
//emit (1,2,3)
const $start = Rx.Observable.of(1, 2, 3);
//start with 0
const exampleWith = $start.startWith(1);
//output: 0,1,2,3
const subscribeWith = exampleWith.subscribe(val => console.log(val));
/*
시퀀스 1,2,3 앞에 1이 시작 되도록 합니다.

const exampleWith =  $start.startWith(1);

만약 3이 시작되도록 하려면

const exampleWith =  $start.startWith(3);

와 같이 합니다.

*/ 
