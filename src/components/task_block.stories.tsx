import {Task_block_component_normal} from "./task_block/normal";
import {Task_blocks_md} from "./task_block_decorator";
import {Task_block_base} from "./task_block";
import {interface_show_what,TaskBlocks_data_handler} from "./task_block/objects";

export default {
	title: "Task_blocks",
	component: Task_block_component_normal,
}
const test_default_show_what: interface_show_what = {
	checkBox: true,
	time: true,
	project: true,
	status: true,
	coWorkers: true,
}
const test_default_show_what_md = {
	checkBox: true,
	// status:true,
}
const taskBlocksObDataHandler = new TaskBlocks_data_handler()
export const Default = () => <Task_block_base data={taskBlocksObDataHandler} show_what={test_default_show_what}/>
export const component_normal = () => <Task_block_component_normal data={taskBlocksObDataHandler}
                                                                   show_what={test_default_show_what}/>
export const md = () => <Task_blocks_md data={taskBlocksObDataHandler} show_what={test_default_show_what_md}/>
