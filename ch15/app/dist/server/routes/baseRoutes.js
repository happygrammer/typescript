"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseRoute {
    constructor() {
        this.title = "타입스크립트 기반 서버";
    }
    addScript(src) {
        this.scripts.push(src);
        return this;
    }
    render(req, res, view, options) {
        res.locals.BASE_URL = "/";
        res.locals.scripts = this.scripts;
        res.locals.title = this.title;
        res.render(view, options);
    }
}
exports.BaseRoute = BaseRoute;
