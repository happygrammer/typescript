/**
 * @author happygrammer
 */
import * as Rx from "@reactivex/rxjs";

const one = Rx.Observable.of(1, 2, 3);
const two = Rx.Observable.of("a", "b", "c");
const sum = one.concat(two);
const subscribe = sum.subscribe(val => console.log(val));