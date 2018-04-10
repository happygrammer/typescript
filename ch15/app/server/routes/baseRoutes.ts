import { Request, Response } from "express";

export class BaseRoute {
  protected title: string;
  private scripts: string[];

  constructor() {
    this.title = "타입스크립트 기반 서버";
  }

  public addScript(src: string): BaseRoute {
    this.scripts.push(src);
    return this;
  }  

  public render(req: Request, res: Response, view: string, options?: Object) {
    //기본 URL 주소를 설정합
    res.locals.BASE_URL = "/";

    //스크립트를 추가함
    res.locals.scripts = this.scripts;

    //페이지 제목을 추가함
    res.locals.title = this.title;

    //뷰를 렌더링
    res.render(view, options);
  }
}