import { BaseComponent } from './base.js';
export class AddButtonComponent extends BaseComponent<HTMLElement> {
	constructor(clickEvent: () => void) {
		super(`<button class="addButton">추가</button>`);
		const addButton = document.querySelector('.addButton');
		console.log(addButton);
		addButton?.addEventListener('click', () => {
			console.log('d');
			clickEvent;
		});
	}
}
