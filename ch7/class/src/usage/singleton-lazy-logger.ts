/**
 * @author happygrammer
 */
class LazeLogger {
    // #1 싱글턴 객체를 담는 정적 멤버 변수를 선언함
    private static uniqueObject: LazeLogger;

    // #2 private을 붙여 객체로 생성되지 않도록 함
    private LazeLogger() { }

    // #3 게으른 초기화를 진행
    public static getLogger(): LazeLogger {
        // #3-1 생성된 객체가 없으면 초기화
        if (this.uniqueObject == null) {
            this.uniqueObject = new LazeLogger();
        }
        return this.uniqueObject;

    }

    // #4 정보 로그를 출력
    public info(message: string) {
        console.log(`[info] ${message}`);
    }

    // #5 경고 로그를 출력
    public warnning(message: string) {
        console.log(`[warn] ${message}`);
    }
}

// #6 싱글턴 객체를 얻고 메서드(info, warning)를 사용함
let lazeLogger: LazeLogger = LazeLogger.getLogger();
let lazeLogger2: LazeLogger = LazeLogger.getLogger();
lazeLogger.info("1번 : 정보 log");
lazeLogger.warnning("2번 : 경고 log");
lazeLogger.info(`3번 : ${lazeLogger === lazeLogger2}`);