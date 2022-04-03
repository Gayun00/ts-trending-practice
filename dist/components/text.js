"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextComponent = void 0;
const base_js_1 = require("./base.js");
class TextComponent extends base_js_1.BaseComponent {
    constructor(text) {
        super(`
      <section>
        <p class="textContent">${text}</p>
      </section>`);
    }
}
exports.TextComponent = TextComponent;
