/**
 * @author happygrammer
 */
import * as Rx from "@reactivex/rxjs";

const hello$ = Rx.Observable.create(function (observer) {
  observer.next("a");
  observer.next("b");
});

const subscribeHello = hello$.map(val => val + val).subscribe(val => console.log(val));