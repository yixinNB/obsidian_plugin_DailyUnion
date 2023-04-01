import style from "./task_blocks.module.less"
import * as React from "react";
import {Avatar, AvatarGroup, createMultiStyleConfigHelpers, defineStyle, Tag} from "@chakra-ui/react";
import { MoreVertical } from 'lucide-react';
export function Test() {
	return(
		<>
			<p>fa</p>
			<p>aga</p>
			<Task_blocks/>
			<div>fff<p>ff</p></div>
		</>
	)
}
export function Task_blocks() {
	return (
		<div className={style.task_block} style={{position:"relative"}}>
			<p style={{paddingBottom: "4px"}}>
				this is task_content
			</p>
			<p className={style.tagline}>
				<Tag>11:32</Tag>
				<Tag size="sm" borderRadius="full" colorScheme="green">
					project
				</Tag>
			</p>
			<p className={style.bottom}>
				<div style={{display:"inline-flex"}}><Status state={"done"}/></div>
				<div style={{display:"inline-flex"}}><div className={style.avatarGroup}><My_avatar/></div></div>
			</p>
			<MoreVertical className={style.menu} size={20}/>
		</div>
	)
}
function Status({state}) {
	return(
		<span style={{color: "green",paddingRight:"2px"}}>
			{state}
		</span>
	)
}
function My_avatar() {
	return(
		<AvatarGroup size='md' max={3}>
			<Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
			<Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
			<Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
			<Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
			<Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
		</AvatarGroup>
	)
}
