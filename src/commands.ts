import {Notice, Plugin} from "obsidian";

export function addCommands(plugin:Plugin) {
	plugin.addCommand({
		id: 'open-sample-modal-simple',
		name: 'Open sample modal (simple)',
		callback: () => {
			new Notice('This is a notice!');
		}
	});
}
