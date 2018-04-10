var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function delay2(msg) {
    let ms = Math.floor(Math.random() * 1000) + 1;
    return new Promise(function (resolve) {
        setTimeout(resolve, ms, msg);
    }).then(function (v) {
        console.log(v, ms + "ms");
    });
}
function sync2() {
    return __awaiter(this, void 0, void 0, function* () {
        var start = new Date().getTime();
        yield delay2("a");
        yield delay2("b");
        yield delay2("c");
        var end = new Date().getTime();
        console.log("시간 : ", end - start + "ms");
    });
}
sync2();
