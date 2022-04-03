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
    </section>`);
    }
}
exports.LinkComponent = LinkComponent;
