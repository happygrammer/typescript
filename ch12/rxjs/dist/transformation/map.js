var Rx = require('@reactivex/rxjs');
const fromData = Rx.Observable.from([1, 2, 3, 4, 5]);
const $map = fromData.map(val => val + 10);
const mapSubscribe = $map.subscribe(val => console.log(val));
