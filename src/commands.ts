import {Notice, Plugin} from "obsidian";
import {EditorView} from "@codemirror/view";
import {add, reset} from './stateField';

export function addCommands(plugin:Plugin) {
	plugin.addCommand({
		id: 'open-sample-modal-simple',
		name: 'Open sample modal (simple)',
		callback: () => {
			new Notice('This is a notice!');
		}
	});
}
