import { BaseComponent } from './base.js';
export class PageComponent extends BaseComponent<HTMLUListElement> {
	constructor() {
		super(`<ul>
      <button class="addButton">추가버튼</button>
    </ul>
    `);
	}
}
