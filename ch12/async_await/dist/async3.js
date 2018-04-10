var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function delay3(msg, ms) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(msg);
        }, ms);
    }).then(function (v) {
        console.log(v + " " + ms + "ms");
        return v;
    });
}
;
function sync3() {
    return __awaiter(this, void 0, void 0, function* () {
        var start = new Date().getTime();
        let result1 = yield delay3("a", 1000);
        let result2 = yield delay3(result1 + "b", 500);
        let result3 = yield delay3(result2 + "c", 100);
        var end = new Date().getTime();
        console.log("시간 : ", end - start + "ms");
    });
}
sync3();
