/**
 * @author happygrammer
 */
import * as Rx from "@reactivex/rxjs";

Rx.Observable.from([1, 2, 3]).subscribe(val => console.log(val));
Rx.Observable.from(new Promise(resolve => resolve("Hello!"))).subscribe(val => console.log(val));

const map = new Map();
map.set(1, 'a');
map.set(2, 'b');
Rx.Observable.from(map).subscribe(val => console.log(val));