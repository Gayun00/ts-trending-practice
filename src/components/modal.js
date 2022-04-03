"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalComponent = void 0;
const base_js_1 = require("./base.js");
class ModalComponent extends base_js_1.BaseComponent {
    constructor() {
        super(`<div class="modal">modal
    <button class="close">x</button>
    <button class="submit"></button>
    </div>`);
        const closeBtn = this.element.querySelector('.close');
        closeBtn.onclick = () => {
            this.onCloseListener && this.onCloseListener();
        };
        const submitBtn = this.element.querySelector('.submit');
        submitBtn.onclick = () => {
            this.onSubmitListener && this.onSubmitListener();
        };
    }
    setOnCloseListener(listener) {
        this.onCloseListener = listener;
    }
    setOnSubmitListener(listener) {
        this.onSubmitListener = listener;
    }
    addChild(child) {
        const body = this.element.querySelector('.modal');
        child.attachTo(body);
    }
}
exports.ModalComponent = ModalComponent;
