import {EditorState, StateEffect, StateField, Transaction} from "@codemirror/state";
import {Decoration, EditorView} from "@codemirror/view";

import { WidgetType } from "@codemirror/view";
class EmojiWidget extends WidgetType {
	toDOM(view: EditorView): HTMLElement {
		const div = document.createElement("span");
		div.innerText = "👉";
		return div;
	}
}
export const emoji_widget_replaceDecoration = Decoration.replace({
	widget: new EmojiWidget()
});

