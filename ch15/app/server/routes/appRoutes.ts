import { NextFunction, Request, Response, Router } from "express";
import { BaseRoute } from "./../routes/BaseRoutes";
import { Index } from "../controllers/index";

export class AppRoutes extends BaseRoute {

  constructor() {
    super();
  }

  public static create(router: Router) {
    router.get("/", (req: Request, res: Response, next: NextFunction) => {
      new Index().renderView(req, res, next);
    });

    router.post("/add", (req: Request, res: Response, next: NextFunction) => {
      new Index().add(req, res, next);
    });

  }

}