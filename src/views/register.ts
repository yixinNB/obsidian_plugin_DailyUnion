import {Plugin} from "obsidian";
import {ExampleView, VIEW_TYPE_EXAMPLE} from "./exampleView";

export function register_Views(plugin:Plugin) {
	plugin.registerView(
		VIEW_TYPE_EXAMPLE,
		(leaf) => new ExampleView(leaf)
	)
}
export function unregister_Views(plugin:Plugin) {
	plugin.app.workspace.detachLeavesOfType(VIEW_TYPE_EXAMPLE);
}
