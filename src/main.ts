import {Plugin} from 'obsidian';
import {
	DEFAULT_SETTINGS,
	DailyUnionPluginSettings,
	DailyUnionSettingTab,
} from "./settings";
import {addCommands} from "./commands";
import {activateView_centerLeaf, register_Views, unregister_Views} from "./views/register";
import {activatedEditorView, activatedView, updateMDView} from "./MDView";
import {myMDExtension} from "./view_plugin";
import {dataContainer, init_dataContainer} from "./data_container";
import {checkRow_is_DailyUnion} from "./obsidian_md_helper";
import {VIEW_TYPE_REACT} from "./views/reactView";

export default class DailyUnion extends Plugin {
	settings: DailyUnionPluginSettings;

	async onload() {
		await this.loadSettings();
		this.addSettingTab(new DailyUnionSettingTab(this.app, this));
		addCommands(this)
		register_Views(this)
		this.addRibbonIcon("bug", "debug", () => {
			activateView_centerLeaf(this,VIEW_TYPE_REACT)
			// console.log(dataContainor.taskdata)
			// new Task_editor_Modal(this.app).open()
		});
		this.registerEditorExtension(myMDExtension())
		init_dataContainer(this)
		this.registerEvent(this.app.workspace.on("editor-change", ()=>{
			checkRow_is_DailyUnion()
		}))

		updateMDView(this)
		this.registerEvent(this.app.workspace.on("active-leaf-change", ()=>{
			updateMDView(this)
		}))
	}

	onunload() {
		unregister_Views(this)
	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}
