"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getItemTemplate(arr) {
    let html = [];
    for (let i = 0; i < arr.length; i++) {
        html.push(`
        <div class="col-xs-4 max50">
            <h2>${arr[i].title}</h2>
            <p>${arr[i].intro}</p>
            <p><a href="${arr[i].url}" target="_blank " class="btn btn-link">바로가기 &raquo;</a></p>
        </div>`);
    }
    return html.join("");
}
exports.getItemTemplate = getItemTemplate;
