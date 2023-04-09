import DailyUnion from "./main";
import {randomString} from "./utils/utils";

//[init later] export let dataContainer: dataContainer_interface = new class_dataContainer_test()

export function init_dataContainer(plugin: DailyUnion) {
	dataContainer = new class_dataContainer(plugin)
}

interface dataContainer_interface {
	// get taskData?(),
	// set taskData?(),
	taskData:any
	query(id: string),
	create(),
	updateContent(id: string, content: string),
	updateStatus(id: string, status: string),
}

export interface interface_taskData {
	[id: string]: {
		content: string,
		status: string,
		createTime: number,
		finishTime: number,
	}
}

class class_dataContainer implements dataContainer_interface {
	plugin: DailyUnion

	constructor(plugin?: DailyUnion) {
		if (plugin) return
		this.plugin = plugin
	}

	private get taskData() {
		return this.plugin.settings.task_data
	}

	private set taskData(value) {
		this.plugin.settings.task_data = value
		this.plugin.saveSettings()
	}

	query(id: string) {
		return this.taskData[id]
	}

	create() {
		let id = randomString()
		this.taskData[id] = {content: "", status: "scheduled", createTime: Date.now(), finishTime: 0}
		this.taskData = this.taskData//the row above can't save it
		return id
	}

	updateContent(id: string, content: string) {
		console.log(content)
		this.taskData[id].content = content
	}

	updateStatus(id: string, status: string) {
		this.taskData[id].status = status
		this.taskData[id].finishTime = Date.now()
	}
}


class class_dataContainer_test implements dataContainer_interface {
	taskData = {
		"test": {
			"content": "test",
			"status": "scheduled",
			"createTime": 1680707086286
		},
		"ZXP1Fp": {
			"content": "task ZXP1Fp",
			"status": "scheduled",
			"createTime": 1680707708230
		},
		"4jCmZB": {
			"content": "task 4jCmZB",
			"status": "done",
			"createTime": 1680797090535,
			"finishTime": 0
		},
	}

	override constructor() {
		console.log("dataContainer:isTest=true")
	}

	override query(id: string) {
		return this.taskData[id]
	}

	create() {
		let id = randomString()
		this.taskData[id] = {content: "", status: "scheduled", createTime: Date.now(), finishTime: 0}
		return id
	}

	updateContent(id: string, content: string) {
		console.log(this.taskData)
		this.taskData[id]!.content = content
	}

	updateStatus(id: string, status: string) {
		this.taskData[id].status = status
		this.taskData[id].finishTime = Date.now()
	}
}

export let dataContainer: dataContainer_interface = new class_dataContainer_test()