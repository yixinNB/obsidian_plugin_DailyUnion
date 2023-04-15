import {App, PluginSettingTab, Setting} from "obsidian";
import DailyUnion from "./main";
import {interface_taskData} from "./data_container";
import {dataVersion_plugin} from "./dataMigration/handler";

export interface DailyUnionPluginSettings {
	mySetting: string;
	dataVersion:number;
	task_data: interface_taskData;
}

export const DEFAULT_SETTINGS: DailyUnionPluginSettings = {
	mySetting: 'default',
	dataVersion: dataVersion_plugin,
	task_data: {}
}

export class DailyUnionSettingTab extends PluginSettingTab {
	plugin: DailyUnion;

	constructor(app: App, plugin: DailyUnion) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const {containerEl} = this;
		containerEl.empty();

		containerEl.createEl('h2', {text: 'Settings for my awesome plugin.'});

		new Setting(containerEl)
			.setName('Setting #1')
			.setDesc('It\'s a secret')
			.addText(text => text
				.setPlaceholder('Enter your secret')
				.setValue(this.plugin.settings.mySetting)
				.onChange(async (value) => {
					console.log('Secret: ' + value);
					this.plugin.settings.mySetting = value;
					await this.plugin.saveSettings();
				}));
	}
}
