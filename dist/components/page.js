"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageComponent = void 0;
const base_js_1 = require("./base.js");
class PageComponent extends base_js_1.BaseComponent {
    constructor() {
        super(`<ul>
      <button class="addButton">추가버튼</button>
    </ul>
    `);
    }
}
exports.PageComponent = PageComponent;
