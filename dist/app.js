"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const modal_js_1 = require("./components/modal.js");
const link_js_1 = require("./components/link.js");
const text_js_1 = require("./components/text.js");
const page_js_1 = require("./components/page.js");
const database_js_1 = require("firebase.ts/database.js");
class App {
    constructor(appRoot) {
        this.page = new page_js_1.PageComponent();
        this.page.attachTo(appRoot);
        const text = new text_js_1.TextComponent('UX개선을 위한 브라우저 퍼포먼스 향상에 관심이 많습니다.');
        text.attachTo(appRoot);
        const Link = new link_js_1.LinkComponent('UX 개선 후기', '브라우저 퍼포먼스 및 성능 최적화에 대해 정리했습니다', 'url');
        Link.attachTo(appRoot);
        const modal = new modal_js_1.ModalComponent();
        function handleModal() {
            console.log(modal);
            modal.setOnCloseListener(() => {
                modal.removeFrom(document.body);
            });
            modal.setOnSubmitListener(() => {
                modal.removeFrom(document.body);
            });
            modal.attachTo(document.body);
        }
        const addButton = document.querySelector('.addButton');
        console.log(addButton);
        addButton === null || addButton === void 0 ? void 0 : addButton.addEventListener('click', () => {
            (0, database_js_1.writeUserData)('sdfsdfsdf', 'sdfsdfsdf');
        });
    }
}
new App(document.querySelector('.document'));
