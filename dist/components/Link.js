import { BaseComponent } from './base.js';
export class LinkComponent extends BaseComponent {
    constructor(title, text, link) {
        super(`
    <section>
      <h2>${title}</h2>
      <p>${text}</p>
      <a href=${link}>${link}</a>
    </section>`);
    }
}
