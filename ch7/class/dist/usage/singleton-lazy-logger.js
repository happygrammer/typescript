class LazeLogger {
    LazeLogger() { }
    static getLogger() {
        if (this.uniqueObject == null) {
            this.uniqueObject = new LazeLogger();
        }
        return this.uniqueObject;
    }
    info(message) {
        console.log(`[info] ${message}`);
    }
    warnning(message) {
        console.log(`[warn] ${message}`);
    }
}
let lazeLogger = LazeLogger.getLogger();
let lazeLogger2 = LazeLogger.getLogger();
lazeLogger.info("1번 : 정보 log");
lazeLogger.warnning("2번 : 경고 log");
lazeLogger.info(`3번 : ${lazeLogger === lazeLogger2}`);
