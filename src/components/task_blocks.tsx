import style from "./task_blocks.module.less"
import * as React from "react";
import {Card, CardBody,Text} from "@chakra-ui/react";
import {ChakraProvider} from '@chakra-ui/react'

export function Task_blocks() {
	return (
			<div className={style.task_block}>
				<Card>
					<CardBody>
						<Text>View a summary of all your customers over the last month.</Text>
					</CardBody>
				</Card>
			</div>

	)
}
