import {dataContainer, interface_taskData_singleTask} from "../../data_container";

export class TaskBlocks_data_handler {
	id: string;
	taskContent_cache: string = "undefined"
	status
	task:interface_taskData_singleTask

	constructor(id = "test") {
		this.id = id
		this.task = dataContainer.query(id)
		//del later
		this.status = this.task.status
		this.taskContent_cache = this.task.content
	}

	save() {
		dataContainer.update()
	}

	//del later
	updateTask() {
		dataContainer.updateContent(this.id, this.taskContent_cache)
	}

	//del later
	toggleStatus() {
		dataContainer.updateStatus(this.id, this.status ? "scheduled" : "done")//todo add if(), change "schedule"
	}
}

export interface interface_show_what {
	checkBox?: boolean,
	time?: boolean,
	project?: boolean,
	status?: boolean,
	coWorkers?: boolean,
}
