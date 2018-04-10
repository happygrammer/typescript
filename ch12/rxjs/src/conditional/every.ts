/**
 * @author happygrammer
 */
import * as Rx from "@reactivex/rxjs";

const source = Rx.Observable.of(1, 10, 20, 30, 40);
const $every = source.every(val => val % 2 === 0);
$every.subscribe(val => console.log(val));
