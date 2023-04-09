import {dataContainer} from "../../data_container";
import React from "react";
import {TaskBlocks_all} from "../task_block_decorator";
import {TaskBlocks_data_handler} from "../task_block/objects";

export function AllTasks() {
	const _taskData: Map<string, any> = dataContainer.taskData
	let ids = []
	for(let key in _taskData){
		ids.push(key)
	}
	return (
		<>
			{ids.map((key)=>{
				return(
						<TaskBlocks_all data={new TaskBlocks_data_handler(key)}/>
					)
			})}
		</>
	)
}