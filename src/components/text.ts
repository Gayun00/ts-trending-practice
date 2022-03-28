export class TextComponent {
	private element: HTMLElement;
	constructor(text: string) {
		const template = document.createElement('template');
		template.innerHTML = `
      <section>
        <p class="textContent"></p>
      </section>`;
		this.element = template.content.firstElementChild! as HTMLElement;
		const textElement = this.element.querySelector(
			'.textContent'
		)! as HTMLParagraphElement;
		textElement.textContent = text;
	}
	attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
		parent.insertAdjacentElement(position, this.element);
	}
}
