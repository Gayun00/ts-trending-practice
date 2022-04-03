"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const modal_js_1 = require("./components/modal.js");
const link_js_1 = require("./components/link.js");
const page_js_1 = require("./components/page.js");
const addButton_js_1 = require("./components/addButton.js");
class App {
    constructor(appRoot) {
        var _a;
        this.page = new page_js_1.PageComponent();
        this.page.attachTo(appRoot);
        // const text = new TextComponent(
        // 	'Test UX개선을 위한 브라우저 퍼포먼스 향상에 관심이 많습니다.'
        // );
        // text.attachTo(appRoot);
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
        const addButton = new addButton_js_1.AddButtonComponent(handleModal);
        addButton.attachTo(appRoot);
        (_a = addButton.addButton) === null || _a === void 0 ? void 0 : _a.addEventListener('click', updateReadme);
        let shaString;
        let content;
        content = 'd';
        fetch(' https://api.github.com/repos/Gayun00/Gayun00/readme')
            .then((res) => res.json())
            .then((res) => {
            console.log(res);
            shaString = res.sha;
            content = atob(res.content);
            console.log(shaString, content);
        });
        function updateReadme(e) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log(e);
                e.preventDefault;
                // fetch('https://api.github.com/repos/Gayun00/Gayun00/contents/README.md', {
                // 	method: 'put',
                // 	headers: {
                // 		'Content-Type': 'application/json',
                // 		Authorization: 'token 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',
                // 	},
                // 	body: JSON.stringify({
                // 		message: 'update profile',
                // 		sha: 'e5d3d32357d64257df73fc3f980797223d670405',
                // 		owner: 'Gayun00',
                // 		content:
                // 			btoa(`![](https://trending-post-api.herokuapp.com/api/get/demo?name=gayun)
                //     <section>
                //     <h1>contentdd</h1>
                //     </section>`),
                // 	}),
                // })
                // 	.then((res) => res.json())
                // 	.then((res) => console.log(res));
                fetch('https://trending-post-api.herokuapp.com/api/put/demo?name=gayun', {
                    method: 'put',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        svgTag: `<svg width="400" height="200">
          <rect width="400" height="300" fill="black" stroke-width: 3px stroke: rgb(0,0,0)/>
        </svg>`,
                    }),
                })
                    .then((res) => res.json())
                    .then((res) => console.log(res));
            });
        }
    }
}
new App(document.querySelector('.document'));
