import * as React from "react";
import {Task_block_base} from "./task_block";
import {interface_show_what} from "./task_block/objects";
const showWhat_all: interface_show_what = {
	checkBox: true,
	time: true,
	project: true,
	status: true,
	coWorkers: true,
}
const showWhat_md: interface_show_what = {
	checkBox: true,
	time: true,
	// status:true,
}
export function TaskBlocks_all({data}) {
	return (
		<Task_block_base data={data} show_what={showWhat_all}/>
	)
}
export function TaskBlocks_md({data}) {
	return (
		<Task_block_base data={data} show_what={showWhat_md}/>
	)
}
