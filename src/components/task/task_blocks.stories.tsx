import {interface_show_what, Task_blocks, Task_blocks_ob_data_handler} from "./task_blocks";
import {Task_blocks_md} from "./task_blocks_decorator";

export default {
	title: "Task_blocks",
	component: Task_blocks,
}
const test_default_show_what: interface_show_what = {
	checkBox: true,
	time: true,
	project: true,
	status: true,
	coWorkers: true,
}
const test_default_show_what_md = {
	checkBox:true,
	// status:true,
}
const taskBlocksObDataHandler=new Task_blocks_ob_data_handler()
export const Default = () => <Task_blocks data={taskBlocksObDataHandler} show_what={test_default_show_what}/>
export const md=()=><Task_blocks_md data={taskBlocksObDataHandler} show_what={test_default_show_what_md}/>
