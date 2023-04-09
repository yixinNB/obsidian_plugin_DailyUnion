import style from './beautifulTextArea.module.less'
import React from "react";
import {TaskBlocks_data_handler} from "../task_block/objects";

export class BeautifulTextArea extends React.Component<{ data:TaskBlocks_data_handler }, void> {
	myRef: React.RefObject<any>;
	task_content_default=this.props.data.taskContent_cache
	constructor(props) {
		super(props)
		this.handleValueChange = this.handleValueChange.bind(this)
		this.myRef = React.createRef();
	}

	handleValueChange(e) {
			this.myRef.current.style.height = this.myRef.current.scrollHeight + "px"
			this.props.data.taskContent_cache=e.target.value
	}

	render() {
		return (
			<>
				<textarea ref={this.myRef} defaultValue={this.task_content_default} onChange={this.handleValueChange}
				          className={style.textArea} autoFocus={true}/>
			</>
		)
	}
}