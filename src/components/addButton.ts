import { BaseComponent } from './base.js';
export class AddButtonComponent extends BaseComponent<HTMLElement> {
	constructor() {
		super(`<button>추가</button>`);
	}
}
