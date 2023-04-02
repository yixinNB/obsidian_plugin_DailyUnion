import {Editor, MarkdownView, Plugin_2} from "obsidian";
import {EditorView} from "@codemirror/view";

export let activatedView:MarkdownView
export let activatedEditor:Editor
export let activatedEditorView:EditorView
export function updateMDView(plugin:Plugin_2) {
	let view=this.app.workspace.getActiveViewOfType(MarkdownView);
	if (view) {
		activatedView = view
		activatedEditor=activatedView.editor
		activatedEditorView = activatedView.editor.cm as EditorView
	}
	//onViewChange

}
