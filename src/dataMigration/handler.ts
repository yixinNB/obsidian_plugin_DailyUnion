// data in data.json of plugin root folder
import DailyUnion from "../main";

export const dataVersion_plugin = 0

export function dataVersionCheck_init(plugin: DailyUnion) {
	let dv=plugin.settings.dataVersion
	if (dv == dataVersion_plugin) return
	if (dv > dataVersion_plugin) alert("DailyUnion:your dataVersion is higher than expected")
	//start migration
	for(;dv<dataVersion_plugin;dv++){

	}
}
