import {Plugin} from 'obsidian';
import {DEFAULT_SETTINGS, MyPluginSettings, SampleSettingTab,} from "./settings";
import {addCommands} from "./commands";
import {register_Views, unregister_Views} from "./views/register";
import {VIEW_TYPE_EXAMPLE} from "./views/exampleView";

export default class DailyUnion extends Plugin {
	settings: MyPluginSettings;

	async onload() {
		await this.loadSettings();
		this.addSettingTab(new SampleSettingTab(this.app, this));
		addCommands(this)
		register_Views(this)
		this.addRibbonIcon("bug", "debug", () => {
			this.activateView();
		});
	}

	onunload() {
		unregister_Views(this)
	}

	async activateView() {
		this.app.workspace.detachLeavesOfType(VIEW_TYPE_EXAMPLE);

		await this.app.workspace.getRightLeaf(false).setViewState({
			type: VIEW_TYPE_EXAMPLE,
			active: true,
		});

		this.app.workspace.revealLeaf(
			this.app.workspace.getLeavesOfType(VIEW_TYPE_EXAMPLE)[0]
		);
	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}
