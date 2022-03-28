export class LinkComponent {
    constructor(title, text, link) {
        const template = document.createElement('template');
        template.innerHTML = `
      <section>
        <h2>${title}</h2>
        <p>${text}</p>
        <a href=${link}>${link}</a>
      </section>`;
        this.element = template.content.lastElementChild;
    }
    attachTo(parent, position = 'beforeend') {
        parent.insertAdjacentElement(position, this.element);
    }
}
