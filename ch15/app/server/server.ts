import * as bodyParser from "body-parser";
import * as cookieParser from "cookie-parser";
import * as express from "express";
import * as logger from "morgan";
import * as path from "path";
import errorHandler = require("errorhandler");
import methodOverride = require("method-override");
import { AppRoutes } from "./routes/appRoutes";

export class Server {

  public app: express.Application;

  public static bootstrap(): Server {
    return new Server();
  }

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  public config() {
    this.app.use(express.static(path.join(__dirname, "../client"))); // 정적 파일 디렉터리 설정
    this.app.set("views", path.join(__dirname, "../server/views")); // 템플릿 디렉터리 설정
    this.app.set("view engine", "ejs"); // ejs 템플릿 추가
    this.app.use(logger("dev")); // dev 로거는 개발에 적합한 로거가 추가 됩니다.
    this.app.use(bodyParser.json()); // JSON 파서 추가

    //쿼리 문자열 파서를 사용할 수 있도록 설정합니다.
    this.app.use(bodyParser.urlencoded({
      extended: true
    }));

    //쿠키 파서를 설정합니다.
    this.app.use(cookieParser("HELLO_TYPESCRIPT"));
    this.app.use(methodOverride());

    this.app.use(function (err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
      err.status = 404;
      next(err);
    });
    this.app.use(errorHandler());
  }

  private routes() {
    let router: express.Router;
    router = express.Router();
    AppRoutes.create(router);
    this.app.use(router);
  }

}

/*
  https://www.npmjs.com/package/morgan
*/

