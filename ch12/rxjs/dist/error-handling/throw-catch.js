var Rx = require('@reactivex/rxjs');
//emit error
const errSource = Rx.Observable.throw('This is an error!');
//gracefully handle error, returning observable with error message
const errExample = errSource.catch(val => Rx.Observable.of(`I caught: ${val}`));
//output: 'I caught: This is an error'
const errSubscribe = errExample.subscribe(val => console.log(val));
/*
옵저버블에서 에러가 발생 했다면 catch를 이용해 에러 상황을 잡아 예외 상황을 처리해 줄 수 있습니다.

*/ 
