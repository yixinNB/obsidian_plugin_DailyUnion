import {App, Modal, Notice, Setting} from "obsidian";
import "./task_editor"
import {Default} from "./task_blocks.stories";
import { renderToStaticMarkup } from "react-dom/server"

export class Task_editor_Modal extends Modal {
	private result: string;
	constructor(app: App) {
		super(app);
	}
	onSubmit(result){
		new Notice(result)
	}
	onOpen() {
		let { contentEl } = this;
		// contentEl.setText("Look at me, I'm a modal! 👀");

		contentEl.innerHTML=renderToStaticMarkup(Default())

		// const textarea=contentEl.createEl("textarea");
		// textarea.addClass("task_content_input")
		// textarea.setAttribute("style","width: 100%;")

		new Setting(contentEl)
			.addButton((btn) =>
				btn
					.setButtonText("Submit")
					.setCta()
					.onClick(() => {
						this.close();
						this.onSubmit(this.result);
					}));
	}

	onClose() {
		let { contentEl } = this;
		contentEl.empty();
	}
}
