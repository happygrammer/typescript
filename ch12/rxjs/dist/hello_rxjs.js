"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rx = require("@reactivex/rxjs");
Rx.Observable.of('a', 'b', 'c').subscribe((v) => console.log(v));
