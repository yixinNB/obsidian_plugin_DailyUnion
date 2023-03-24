import * as React from "react";
import * as ReactDOM from "react-dom";
import {createRoot} from "react-dom/client";
import {App, ItemView, WorkspaceLeaf} from 'obsidian';

export const VIEW_TYPE_REACT="react"
export const AppContext = React.createContext<App|undefined>(undefined);
export class ReactView extends ItemView {
	constructor(leaf: WorkspaceLeaf) {
		super(leaf);
	}

	getViewType() {
		return VIEW_TYPE_REACT;
	}

	getDisplayText() {
		return "react view";
	}

	async onOpen() {
		const root = createRoot(this.containerEl.children[1]);
		root.render(
			<React.StrictMode>
				<h4>Hello, React!</h4>,
			</React.StrictMode>
		);
	}

	async onClose() {
		ReactDOM.unmountComponentAtNode(this.containerEl.children[1]);
	}
}
