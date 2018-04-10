/**
 * @author happygrammer
 */
import * as Rx from '@reactivex/rxjs';
Rx.Observable.of('a', 'b', 'c').subscribe((v) => console.log(v));