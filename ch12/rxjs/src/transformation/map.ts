/**
 * @author happygrammer
 */
import * as Rx from "@reactivex/rxjs";

const streamData$ = Rx.Observable.from([1, 2, 3, 4, 5]);
const map = streamData$.map(val => val + 10);
const mapSubscribe = map.subscribe(val => console.log(val));