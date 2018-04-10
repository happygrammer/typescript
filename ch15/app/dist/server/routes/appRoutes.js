"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseRoutes_1 = require("./../routes/BaseRoutes");
const index_1 = require("../controllers/index");
class AppRoutes extends BaseRoutes_1.BaseRoute {
    constructor() {
        super();
    }
    static create(router) {
        router.get("/", (req, res, next) => {
            new index_1.Index().renderView(req, res, next);
        });
        router.post("/add", (req, res, next) => {
            new index_1.Index().add(req, res, next);
        });
    }
}
exports.AppRoutes = AppRoutes;
