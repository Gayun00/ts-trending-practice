export class TextComponent {
    constructor(text) {
        const template = document.createElement('template');
        template.innerHTML = `
      <section>
        <p class="textContent"></p>
      </section>`;
        this.element = template.content.firstElementChild;
        const textElement = this.element.querySelector('.textContent');
        textElement.textContent = text;
    }
    attachTo(parent, position = 'afterbegin') {
        parent.insertAdjacentElement(position, this.element);
    }
}
