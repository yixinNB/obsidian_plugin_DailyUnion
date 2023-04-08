import {dataContainor} from "../../data_container";

export class Task_blocks_ob_data_handler {
	test_default: boolean
	id: string;
	task_content
	status

	constructor(id = "test_default") {
		if (id == "test_default") {
			this.test_default = true
			this.status = "scheduled"
			this.task_content = "test task contentffffffffffffffffffffffffffff"
		} else {
			this.id = id
			const task = dataContainor.query(id)
			this.status = task.status
			this.task_content = task.content
		}
	}

	toggleStatus() {
		if (this.test_default) return
		dataContainor.edit_status(this.id, this.status ? "scheduled" : "done")//todo add if(), change "schedule"
	}
}

export interface interface_show_what {
	checkBox?: boolean,
	time?: boolean,
	project?: boolean,
	status?: boolean,
	coWorkers?: boolean,
}
