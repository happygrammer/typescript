var Rx = require('@reactivex/rxjs');
//take the first observable to emit
const raceObservable = Rx.Observable.race(
//emit every 1.5s
Rx.Observable.interval(900).mapTo('900'), 
//emit every 1s
Rx.Observable.interval(1000).mapTo('1ss!'), 
//emit every 2s
Rx.Observable.interval(2000).mapTo('2s'), 
//emit every 2.5s
Rx.Observable.interval(2500).mapTo('2.5s'));
//output: "1s won!"..."1s won!"...etc
const raceSubscribe = raceObservable.subscribe(val => console.log(val));
/*
옵저버블이 4개가 선언됐다. 인터벌(interval)이 가장 짧은 옵저버블을 출력한다.

*/ 
