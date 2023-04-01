import {MarkdownView, Plugin_2} from "obsidian";
import {EditorView} from "@codemirror/view";

export let activatedView:MarkdownView
export let activatedEditorView:EditorView
export function updateMDView(plugin:Plugin_2) {
	let view=this.app.workspace.getActiveViewOfType(MarkdownView);
	if (view) {
		activatedView = view
		activatedEditorView = activatedView.editor.cm as EditorView
	}
	//onViewChange

}
