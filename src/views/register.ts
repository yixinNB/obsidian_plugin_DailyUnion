import {Plugin} from "obsidian";
import {ExampleView, VIEW_TYPE_EXAMPLE} from "./exampleView";
import {ReactView, VIEW_TYPE_REACT} from "./reactView";

let registered_view_types = []

export function register_Views(plugin: Plugin) {
	plugin.registerView(
		VIEW_TYPE_EXAMPLE,
		(leaf) => new ExampleView(leaf)
	)
	plugin.registerView(
		VIEW_TYPE_REACT,
		(leaf) => new ReactView(leaf)
	)
	registered_view_types = [
		VIEW_TYPE_EXAMPLE,
		VIEW_TYPE_REACT
	]
}

export function unregister_Views(plugin: Plugin) {
	registered_view_types.map((item) => {
		plugin.app.workspace.detachLeavesOfType(item);
	})
}

export async function activateView_centerLeaf(plugin: Plugin, view_type: string) {
	plugin.app.workspace.detachLeavesOfType(view_type);

	await plugin.app.workspace.getLeaf(false).setViewState({
		type: view_type,
		active: true,
	});

	plugin.app.workspace.revealLeaf(
		plugin.app.workspace.getLeavesOfType(view_type)[0]
	);
}

export async function activateView_rightLeaf(plugin: Plugin, view_type: string) {
	plugin.app.workspace.detachLeavesOfType(view_type);

	await plugin.app.workspace.getRightLeaf(false).setViewState({
		type: view_type,
		active: true,
	});

	plugin.app.workspace.revealLeaf(
		plugin.app.workspace.getLeavesOfType(view_type)[0]
	);
}

