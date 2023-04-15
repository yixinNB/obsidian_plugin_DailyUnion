import React, {useCallback, useState} from "react";
import {Chip, Slider, Tab, TabList, Tabs} from "@mui/joy";
import {CssVarsProvider} from "@mui/joy";
import {
	ChakraProvider,
	Popover,
	PopoverArrow,
	PopoverBody,
	PopoverCloseButton,
	PopoverContent,
	PopoverFooter, PopoverHeader,
	PopoverTrigger, Tag
} from "@chakra-ui/react";
import {TaskBlocks_data_handler} from "./objects";

export function TaskBlock_edit_dateTime({dataHandler = new TaskBlocks_data_handler()}) {
	const [dateTime_tagString, set_dateTime_tagString] = useState(dateTimeObj2TagString())
	const [dateTime_DateObj_temp, set_dateTime_DateObj_temp] = useState()

	function updateDateTime() {
		if (dateTime_DateObj_temp) {
			dataHandler.task.notifyTime = dateTime_DateObj_temp.toISOString()
		}
		set_dateTime_tagString(dateTimeObj2TagString())
	}

	function dateTimeObj2TagString() {
		if (!dataHandler.task.notifyTime) return ("time")
		const dataTime_dateObj = new Date(dataHandler.task.notifyTime)

		const day = dataTime_dateObj.getDay()
		const day_now = new Date().getDay()
		let day_str
		if (day == day_now) day_str = "today"
		else if (day == day_now + 1 || (day_now == 6 && day == 0)) day_str = "tomorrow"
		else day_str = dataTime_dateObj.toDateString().slice(0, 3)

		let time = dataTime_dateObj.toTimeString().slice(0, 5)
		return (day_str + " " + time)
	}

	return (
		<>
			<ChakraProvider>
				<Popover
					placement='auto'
					closeOnBlur={true}>
					<PopoverTrigger>
						<Tag>{dateTime_tagString}</Tag>
					</PopoverTrigger>
					<PopoverContent bg="gray.100" w="auto" pl="3ex" pr="3ex"> {/*bg = 'blue.800' borderColor='blue.800'*/}
						<PopoverHeader pt={4} fontWeight='bold' border='0'>add email notify time</PopoverHeader>
						<PopoverArrow/>
						<PopoverCloseButton/>
						<PopoverBody>
							<CssVarsProvider>
								<TaskBlock_edit_dateTime_Base setDateTime_parent={set_dateTime_DateObj_temp}/>
							</CssVarsProvider>
						</PopoverBody>
						<PopoverFooter
							border='0'
							display='flex'
							alignItems='center'
							justifyContent='space-between'
							pb={4}
						>
							<div/>
							{/*take the place,make sure button is on the right*/}
							<div>
								<CssVarsProvider>
									<Chip
										variant="outlined"
										color="danger"> clear</Chip>
									<Chip onClick={updateDateTime}>Save</Chip>
								</CssVarsProvider>
							</div>
						</PopoverFooter>
					</PopoverContent>
				</Popover>
			</ChakraProvider>
		</>
	)
}

function TaskBlock_edit_dateTime_Base({setDateTime_parent}) {
	const day = new Date().getDay()
	const [dateTime,set_dateTime]=useState(new Date())
	dateTime.setSeconds(0)
	// console.log(dateTime)//not important bug: auto whole render this component when temp_time change
	const [index, setIndex] = useState(day)

	function handleChange_day(e, val) {
		setIndex(val)
		if(val==0)val=7//sunday
		combineDateTime(val)
	}

	function handleChange_hour(e, val) {
		combineDateTime(null, val)
	}

	function handleChange_min(e, val) {
		combineDateTime(null, null, val)
	}

	function combineDateTime(day_?, hour_?, min_?) {
		if (day_) {
			let deltaDay_ = day_ - day
			if (deltaDay_ < 0) deltaDay_ += 7
			dateTime.setDate(new Date().getDate() + deltaDay_)
		}
		if (hour_) {
			dateTime.setHours(hour_)
		}
		if (min_) {
			dateTime.setMinutes(min_)
		}
		set_dateTime(dateTime)
		// console.log("TaskBlock_edit_dateTime_Base\r\n" + dateTime)
		setDateTime_parent(dateTime)
	}

	return (
		<>
			<Tabs size={"sm"} style={{width: "50ex"}} value={index} onChange={handleChange_day}>
				<TabList variant="outlined" color="neutral">
					{["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((val, tabId) => {
						return (
							<Tab variant={index == tabId ? "soft" : "plain"}
							     color={index == tabId ? "primary" : "neutral"}>{tabId == day ? "TODAY" : val}</Tab>
						)
					})}
				</TabList>
			</Tabs>

			<Slider
				style={{paddingTop: "8ex", width: "50ex"}}
				// orientation="vertical"
				size="lg"
				valueLabelDisplay="on"
				min={6}
				max={24}
				step={1}
				track={false}
				onChange={handleChange_hour}
				marks={[
					{
						value: 6,
						label: '06:00',
					},
					{
						value: 8,
						label: '08:00',
					},
					{
						value: 24,
						label: '24:00',
					},
				]}
			/>
			<br/>
			<Slider
				style={{paddingTop: "7ex", width: "50ex"}}
				// orientation="vertical"
				size="lg"
				valueLabelDisplay="on"
				onChange={handleChange_min}
				min={0}
				max={60}
				step={5}
				track={false}
				marks={[
					{
						value: 0,
						label: '00',
					},
					{
						value: 15,
						label: '15',
					},
					{
						value: 30,
						label: '30',
					},
					{
						value: 45,
						label: '45',
					},
					{
						value: 60,
						label: '60',
					},
				]}
			/>
		</>
	);
}