import {ChakraProvider} from '@chakra-ui/react'
import {interface_show_what, Task_blocks_ob_data_handler} from "./task_block/objects";
import {useState} from 'react'
import {Task_block_component_normal} from "./task_block/normal";
import {Task_block_component_edit} from "./task_block/edit";
import style from './task_block.module.less'

interface Task_block_interface {
	data: Task_blocks_ob_data_handler,
	show_what: interface_show_what
}

export function Task_block_base({data, show_what}: Task_block_interface) {
	const [isEdit, set_isEdit] = useState(false)
	return (
		<ChakraProvider>
			<div onDoubleClick={()=>{set_isEdit(!isEdit)}} className={style.task_block_outline} onBlur={()=>{set_isEdit(false)}}>
				{!isEdit ?
					<Task_block_component_normal data={data} show_what={show_what}/>
					:
					<Task_block_component_edit/>
				}
			</div>
		</ChakraProvider>
	)
}
