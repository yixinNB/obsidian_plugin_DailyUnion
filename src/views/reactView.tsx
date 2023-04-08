import * as React from "react";
import * as ReactDOM from "react-dom";
import {createRoot, Root} from "react-dom/client";
import {App, ItemView, WorkspaceLeaf} from 'obsidian';
import {Kanban} from "../components/kanban";
import {Default} from '../components/task_block.stories'

export const VIEW_TYPE_REACT="react"
export const AppContext = React.createContext<App|undefined>(undefined);
export class ReactView extends ItemView {
	private root: Root;
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
		this.root = createRoot(this.containerEl.children[1]);
		this.root.render(
			<React.StrictMode>
				{/*<Kanban/>*/}
				<Default/>
			</React.StrictMode>
		);
	}

	async onClose() {
		this.root.unmount()
		ReactDOM.unmountComponentAtNode(this.containerEl.children[1]);
	}
}
