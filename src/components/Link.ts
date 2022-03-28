import { BaseComponent } from './base.js';
export class LinkComponent extends BaseComponent<HTMLElement> {
	constructor(title: string, text: string, link: string) {
		super(`
    <section>
      <h2>${title}</h2>
      <p>${text}</p>
      <a href=${link}>${link}</a>
    </section>`);
	}
}
