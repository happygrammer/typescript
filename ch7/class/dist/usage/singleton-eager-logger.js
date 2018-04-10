class EagerLogger {
    EagerLogger() { }
    static getLogger() {
        return this.uniqueObject;
    }
    info(message) {
        console.log(`[info] ${message}`);
    }
    warnning(message) {
        console.log(`[warn] ${message}`);
    }
}
EagerLogger.uniqueObject = new EagerLogger();
let eagerLogger = EagerLogger.getLogger();
let eagerLogger2 = EagerLogger.getLogger();
eagerLogger.info("1번 : 정보 log");
eagerLogger.warnning("2번 : 경고 log");
eagerLogger.info(`3번 : ${eagerLogger === eagerLogger2}`);
