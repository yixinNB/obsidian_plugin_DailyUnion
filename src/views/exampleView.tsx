import {ItemView, WorkspaceLeaf} from "obsidian";
export const VIEW_TYPE_EXAMPLE = "example-view";

export class ExampleView extends ItemView {
	constructor(leaf: WorkspaceLeaf) {
		super(leaf);
	}

	/**
	 * returns a unique identifier for the view.
	 */
	getViewType() {
		return VIEW_TYPE_EXAMPLE;
	}

	/**
	 * returns a human-friendly name for the view.
	 */
	getDisplayText() {
		return "Example view";
	}

	async onOpen() {
		const container = this.containerEl.children[1];
		container.empty();
		container.createEl("h4", { text: "Example view" });
	}

	async onClose() {
		// Nothing to clean up.
	}
}
