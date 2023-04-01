import {Editor, MarkdownView, Plugin} from 'obsidian';
import {DEFAULT_SETTINGS, MyPluginSettings, SampleSettingTab,} from "./settings";
import {addCommands} from "./commands";
import {activateView_centerLeaf, activateView_rightLeaf, register_Views, unregister_Views} from "./views/register";
import {VIEW_TYPE_EXAMPLE} from "./views/exampleView";
import {VIEW_TYPE_REACT} from "./views/reactView";
import {activatedEditorView, updateMDView} from "./MDView";
import {zebraStripes} from "./example";

export default class DailyUnion extends Plugin {
	settings: MyPluginSettings;

	async onload() {
		await this.loadSettings();
		this.addSettingTab(new SampleSettingTab(this.app, this));
		addCommands(this)
		register_Views(this)
		this.addRibbonIcon("bug", "debug", () => {
			// activateView_centerLeaf(this,VIEW_TYPE_REACT)

		});
		this.registerEditorExtension(zebraStripes())

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
