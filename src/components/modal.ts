import { BaseComponent, Component } from './base.js';

type OnCloseListener = () => void;
type OnSubmitListener = () => void;

export interface Composable {
	addChild(child: Component): void;
}

export class ModalComponent extends BaseComponent<HTMLElement> {
	onCloseListener?: OnCloseListener;
	onSubmitListener?: OnSubmitListener;
	constructor() {
		super(`<div class="modal">modal
    <button class="close">x</button>
    <button class="submit"></button>
    </div>`);

		const closeBtn = this.element.querySelector('.close')! as HTMLElement;
		closeBtn.onclick = () => {
			this.onCloseListener && this.onCloseListener();
		};

		const submitBtn = this.element.querySelector('.submit')! as HTMLElement;
		submitBtn.onclick = () => {
			this.onSubmitListener && this.onSubmitListener();
		};
	}

	setOnCloseListener(listener: OnCloseListener) {
		this.onCloseListener = listener;
	}

	setOnSubmitListener(listener: OnCloseListener) {
		this.onSubmitListener = listener;
	}

	addChild(child: Component) {
		const body = this.element.querySelector('.modal')! as HTMLElement;
		child.attachTo(body);
	}
}
