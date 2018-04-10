var Rx = require('@reactivex/rxjs');
Rx.Observable.of(1, 2, 3).subscribe(val => console.log(val));
Rx.Observable.of('a', 'b', 'c').subscribe(val => console.log(val));
Rx.Observable.of(['a', 'b'], ['c', 'd']).subscribe(val => console.log(val));
