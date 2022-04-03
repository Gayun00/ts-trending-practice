"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkComponent = void 0;
const base_js_1 = require("./base.js");
class LinkComponent extends base_js_1.BaseComponent {
    constructor(title, text, link) {
        super(`
    <section>
      <h2>${title}</h2>
      <p>${text}</p>
      <a href=${link}>${link}</a>
      <svg width="400" height="200">
        <rect width="400" height="300" fill="black" stroke-width: 3px stroke: rgb(0,0,0)/>
      </svg>

    </section>`);
    }
}
exports.LinkComponent = LinkComponent;
