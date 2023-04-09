import {Task_block_component_normal} from "./task_block/normal";
import {TaskBlocks_md} from "./task_block_decorator";
import {Task_block_base} from "./task_block";
import {interface_show_what,TaskBlocks_data_handler} from "./task_block/objects";

export default {
	title: "Task_blocks",
	component: Task_block_component_normal,
}

const taskBlocksObDataHandler = new TaskBlocks_data_handler()
export const Default = () => <Task_block_base data={taskBlocksObDataHandler} show_what={test_default_show_what}/>
