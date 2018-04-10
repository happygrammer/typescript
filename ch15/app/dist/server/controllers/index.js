"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseRoutes_1 = require("./../routes/baseRoutes");
const list_model_1 = require("../model/list_model");
const template = require("../../common/template");
class Index extends baseRoutes_1.BaseRoute {
    constructor() {
        super();
    }
    renderView(req, res, next) {
        let title = "HAPPY 북마크";
        let listArr = (new list_model_1.default()).getList();
        let listHTML = template.getItemTemplate(listArr);
        let options = {
            "title": title,
            "listHTML": listHTML
        };
        this.render(req, res, "index", options);
    }
    add(req, res, next) {
        let item = req.body.item;
        let reponse = { success: true, item: item };
        res.send(reponse);
    }
}
exports.Index = Index;
