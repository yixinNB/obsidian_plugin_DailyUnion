import {Task_block_component_normal} from "./task_block/normal";
import {TaskBlocks_all, TaskBlocks_md} from "./task_block_decorator";
import {TaskBlocks_data_handler} from "./task_block/objects";

export default {
	title: "Task_blocks",
	component: Task_block_component_normal,
}

const taskBlocksObDataHandler = new TaskBlocks_data_handler()
export const Default = () => <TaskBlocks_all data={taskBlocksObDataHandler}/>
export const md = () => <TaskBlocks_md data={taskBlocksObDataHandler}/>
