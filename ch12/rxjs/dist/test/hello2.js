var Rx = require('@reactivex/rxjs');
Rx.Observable.of('a', 'b', 'c').subscribe((v) => console.log(v));
