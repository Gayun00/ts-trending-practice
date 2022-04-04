import { BaseComponent } from './base.js';
export class AddButtonComponent extends BaseComponent {
    constructor(clickEvent) {
        super(`<button class="addButton">추가</button>`);
        const addButton = document.querySelector('.addButton');
        console.log(addButton);
        addButton === null || addButton === void 0 ? void 0 : addButton.addEventListener('click', () => {
            console.log('d');
            clickEvent;
        });
    }
}
