"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextComponent = void 0;
const base_js_1 = require("./base.js");
class TextComponent extends base_js_1.BaseComponent {
    constructor(text) {
        super(`
    <svg width="200" height="30" >
      <text x="0" y="15" fill="black">${text}</text>
    </svg>`);
    }
}
exports.TextComponent = TextComponent;
