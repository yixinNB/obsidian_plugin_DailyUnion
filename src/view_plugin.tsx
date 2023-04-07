import {EditorView, Decoration, ViewPlugin, DecorationSet, ViewUpdate, WidgetType} from "@codemirror/view"
import {Extension, RangeSetBuilder} from "@codemirror/state"

const regexp = new RegExp(/^-\[DailyUnion:\w{6}]$/)

function main(view: EditorView) {
	let builder = new RangeSetBuilder<Decoration>()
	for (let {from, to} of view.visibleRanges) {
		for (let pos = from; pos <= to;) {
			/**
			 * from: 4716 // char num
			 * number: 94 // row num
			 * text: "## API Documentation"
			 * to: 4736 //char num
			 */
			let line = view.state.doc.lineAt(pos)

			if (regexp.test(line.text)) {
				builder.add(line.from, line.to, emoji_widget_replaceDecoration)
			}
			pos = line.to + 1
		}
	}
	return builder.finish()
}


class EmojiWidget extends WidgetType {
	toDOM(view: EditorView): HTMLElement {
		const div = document.createElement("span");
		div.innerText = "[[[[[👉]]]]]]";
		return div;
	}
}

export const emoji_widget_replaceDecoration = Decoration.replace({
	widget: new EmojiWidget()
});

export function myMDExtension(): Extension {
	return [
		show,
	]
}

const show = ViewPlugin.fromClass(class {
	decorations: DecorationSet

	constructor(view: EditorView) {
		this.decorations = main(view)
	}

	update(update: ViewUpdate) {
		if (update.docChanged || update.viewportChanged)
			this.decorations = main(update.view)
	}
}, {
	decorations: v => v.decorations
})

