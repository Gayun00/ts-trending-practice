import { TextComponent } from './components/text.js';
import { PageComponent } from './components/page.js';
class App {
	private readonly page: PageComponent;
	constructor(appRoot: HTMLElement) {
		this.page = new PageComponent();
		this.page.attachTo(appRoot);

		const text = new TextComponent(
			'UX개선을 위한 브라우저 퍼포먼스 향상에 관심이 많습니다.'
		);
		text.attachTo(appRoot);
	}
}

new App(document.querySelector('.document')! as HTMLElement);
