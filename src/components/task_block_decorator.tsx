import {Task_block_component_normal} from "./task_block/normal";
import * as React from "react";

export function Task_blocks_md({data, show_what}) {
	return (
		<Task_block_component_normal data={data} show_what={show_what}/>
	)
}
