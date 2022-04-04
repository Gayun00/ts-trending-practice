import { BaseComponent } from './base.js';
export class TextComponent extends BaseComponent {
    constructor(text) {
        super(`
      <section>
        <p class="textContent">${text}</p>
      </section>`);
    }
}
