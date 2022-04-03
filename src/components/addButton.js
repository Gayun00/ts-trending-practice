"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddButtonComponent = void 0;
const base_js_1 = require("./base.js");
class AddButtonComponent extends base_js_1.BaseComponent {
    constructor(clickEvent) {
        super(`<button class="addButton">추가</button>`);
        const addButton = document.querySelector('.addButton');
        addButton === null || addButton === void 0 ? void 0 : addButton.addEventListener('click', () => {
            clickEvent;
        });
    }
    get addButton() {
        const addButton = document.querySelector('.addButton');
        return addButton;
    }
}
exports.AddButtonComponent = AddButtonComponent;
