import { NextFunction, Request, Response, Router } from "express";
import { BaseRoute } from "./../routes/baseRoutes";
import ItemList from "../model/list_model";
import * as template from "../../common/template";
import * as Iresponse from "../../common/types/Iresponse";

export class Index extends BaseRoute {

  constructor() {
    super();
  }

  public renderView(req: Request, res: Response, next: NextFunction) {
    let title = "HAPPY 북마크";    

    // 외부 모델에서 데이터를 가져옴
    let listArr = (new ItemList()).getList();

    // 공통 API에서 템플릿을 생성함
    let listHTML: string = template.getItemTemplate(listArr); 
    
    // 템플릿 렌더링시 필요한 데이터를 저장함
    let options: Object = {
      "title": title,
      "listHTML": listHTML
    };
    this.render(req, res, "index", options);
  }

  public add(req: Request, res: Response, next: NextFunction) {    
    let item = req.body.item; // 클라이언트에 받은 북마크 정보

    // 공통 API에서 가져온 인터페이스 타입(Iresponse.IresponseItem)을 추가함
    let reponse:Iresponse.IresponseItem={success:true,item:item};    
    res.send(reponse);
  }
}