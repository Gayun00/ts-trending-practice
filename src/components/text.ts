import { BaseComponent } from './base.js';
export class TextComponent extends BaseComponent<HTMLElement> {
	constructor(text: string) {
		super(`
      <section>
        <p class="textContent">${text}</p>
      </section>`);
	}
}
