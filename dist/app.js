import { ModalComponent } from './components/modal.js';
import { LinkComponent } from './components/link.js';
import { TextComponent } from './components/text.js';
import { PageComponent } from './components/page.js';
import { writeUserData } from './firebase.ts/database';
class App {
    constructor(appRoot) {
        this.page = new PageComponent();
        this.page.attachTo(appRoot);
        const text = new TextComponent('UX개선을 위한 브라우저 퍼포먼스 향상에 관심이 많습니다.');
        text.attachTo(appRoot);
        const Link = new LinkComponent('UX 개선 후기', '브라우저 퍼포먼스 및 성능 최적화에 대해 정리했습니다', 'url');
        Link.attachTo(appRoot);
        const modal = new ModalComponent();
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
            writeUserData('sdfsdfsdf', 'sdfsdfsdf');
        });
    }
}
new App(document.querySelector('.document'));
