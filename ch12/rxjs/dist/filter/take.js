var Rx = require('@reactivex/rxjs');
const interval = Rx.Observable.interval(100);
const take$ = interval.take(3);
take$.subscribe(val => console.log(val));
