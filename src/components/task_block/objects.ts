import {dataContainer} from "../../data_container";

export class TaskBlocks_data_handler {
	id: string;
	taskContent_cache: string = "undefined"
	status

	constructor(id = "test") {
		this.id = id
		const task = dataContainer.query(id)
		this.status = task.status
		this.taskContent_cache = task.content
	}

	updateTask() {
		dataContainer.updateContent(this.id, this.taskContent_cache)
	}

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
