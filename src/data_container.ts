import DailyUnion from "./main";
import {randomString} from "./utils/utils";
export let dataContainor:class_dataContainer
export function init_dataContainer(plugin: DailyUnion) {
	dataContainor=new class_dataContainer(plugin)
}
export interface interface_taskData {
	[id:string]:{
		content:string,
		status:string,
		createTime:number,
		finishTime:number,
	}
}

class class_dataContainer {
	plugin:DailyUnion
	constructor(plugin:DailyUnion) {
		this.plugin=plugin
	}
	get taskdata(){
		return this.plugin.settings.task_data
	}
	set taskdata(value) {
		this.plugin.settings.task_data=value
		this.plugin.saveSettings()
	}
	query(id:string){
		return this.taskdata[id]
	}
	create(){
		let id=randomString()
		this.taskdata[id]={content:"",status:"scheduled",createTime:Date.now(),finishTime:0}
		this.taskdata=this.taskdata//the row above can't save it
		return id
	}
	edit_content(id:string,content:string){
		this.taskdata[id].content=content
	}
	edit_status(id:string,status:string){
		this.taskdata[id].status=status
		this.taskdata[id].finishTime=Date.now()
	}
}



