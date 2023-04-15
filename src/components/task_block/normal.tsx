import style from "./taskBlock_normal.module.less"
import {
	Avatar,
	AvatarGroup,
	Checkbox,
	Tag,
	useBoolean,
} from "@chakra-ui/react";
import {interface_show_what, TaskBlocks_data_handler} from "./objects";
import {TaskBlock_edit_dateTime} from "./dateTime";

interface Task_block_component_normal_interface {
	data: TaskBlocks_data_handler,
	show_what: interface_show_what
}

export function Task_block_component_normal({data, show_what}: Task_block_component_normal_interface) {
	const [check_state, set_check_state] = useBoolean(data.status == "done")

	function toggle_status() {
		set_check_state.toggle()
		data.toggleStatus()//todo add if(), change "schedule"
	}

	return (
		<>
			<div style={{paddingBottom: "4px"}}>
				<Checkbox isChecked={check_state} onChange={toggle_status} colorScheme='green'
				          className={style.checkbox}/>
				<span onClick={toggle_status} style={check_state ? {textDecoration: "line-through"} : {}}>
					{data.taskContent_cache}
				</span>
			</div>
			<div className={style.tagline} style={(!show_what.time && !show_what.project) ? {display: "none"} : {}}>
				{show_what.time &&
            <TaskBlock_edit_dateTime dataHandler={data}/>
				}
				{show_what.project &&
            <Tag size="sm" borderRadius="full" colorScheme="green">
                projectName
            </Tag>
				}
			</div>
			<div className={style.bottom} style={(!show_what.status && !show_what.coWorkers) ? {display: "none"} : {}}>
				{show_what.status &&
            <span style={{display: "inline-flex"}}><Status state={check_state}/></span>
				}
				{show_what.coWorkers &&
            <span style={{display: "inline-flex"}}>
						<span className={style.avatarGroup}><My_avatar/></span>
					</span>
				}
			</div>
			{/*<MoreVertical className={style.menu} size={15}/>*/}
		</>
	)
}

function Status({state}) {
	let state_color = state ? "green" : "black"
	return (
		<span style={{color: state_color, paddingRight: "2px"}}>
			{state ? "done" : ""}
		</span>
	)
}

function My_avatar() {
	return (
		<AvatarGroup size='md' max={3}>
			<Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence'/>
			<Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo'/>
			<Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds'/>
			<Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba'/>
			<Avatar name='Christian Nwamba' src='https://bit.ly/code-beast'/>
		</AvatarGroup>
	)
}
