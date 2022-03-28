export class LinkComponent {
	private element: HTMLUListElement;

	constructor(title: string, text: string, link: string) {
		const template = document.createElement('template');
		template.innerHTML = `
      <section>
        <h2>${title}</h2>
        <p>${text}</p>
        <a href=${link}>${link}</a>
      </section>`;
		this.element = template.content.lastElementChild! as HTMLUListElement;
	}
	attachTo(parent: HTMLElement, position: InsertPosition = 'beforeend') {
		parent.insertAdjacentElement(position, this.element);
	}
}
