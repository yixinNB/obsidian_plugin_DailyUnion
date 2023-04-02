import style from "./task_blocks.module.less"
import * as React from "react";
import {
	Avatar,
	AvatarGroup,
	Checkbox,
	Tag,
	useBoolean
} from "@chakra-ui/react";
import {MoreVertical} from 'lucide-react';
import {dataContainor} from "../data_container";

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

export function Task_blocks({data, show_what}) {
	const [check_state, set_check_state] = useBoolean(data.status == "done")

	function toggle_status() {
		set_check_state.toggle()
		data.toggleStatus()//todo add if(), change "schedule"
	}

	return (
		<div className={style.task_block} style={{position: "relative"}}>
			<p style={{paddingBottom: "4px"}}>
				<Checkbox isChecked={check_state} onChange={toggle_status} colorScheme='green'
						  className={style.checkbox}/>
				<span onClick={toggle_status} style={check_state ? {textDecoration: "line-through"} : {}}>
					{data.task_content}
				</span>
			</p>
			<p className={style.tagline} style={(!show_what.time && !show_what.project)?{display:"none"}:{}}>
				{show_what.time &&
					<Tag>11:32</Tag>
				}
				{show_what.project &&
					<Tag size="sm" borderRadius="full" colorScheme="green">
						projectName
					</Tag>
				}
			</p>
			<p className={style.bottom} style={(!show_what.status && !show_what.coWorkers)?{display:"none"}:{}}>
				{show_what.status &&
					<div style={{display: "inline-flex"}}><Status state={check_state}/></div>
				}
				{show_what.coWorkers &&
					<div style={{display: "inline-flex"}}>
						<div className={style.avatarGroup}><My_avatar/></div>
					</div>
				}
			</p>
			<MoreVertical className={style.menu} size={15}/>
		</div>
	)
}

function Status({state}) {
	let state_color = state ? "green" : "black"
	return (
		<span style={{color: state_color, paddingRight: "2px"}}>
			{state?"done":""}
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
