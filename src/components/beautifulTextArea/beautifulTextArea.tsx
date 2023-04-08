import style from './beautifulTextArea.module.less'
import React from "react";

export class BeautifulTextArea extends React.Component<any, any> {
	myRef: React.RefObject<any>;
	textvalue: string = "test"

	constructor(props) {
		super(props)
		this.handleValueChange = this.handleValueChange.bind(this)
		this.myRef = React.createRef();
	}

	handleValueChange(e) {
		this.myRef.current.style.height = this.myRef.current.scrollHeight + "px"
		// this.myRef.current.select()
		this.textvalue = e.target.value
	}

	render() {
		return (
			<>
				<textarea ref={this.myRef} defaultValue={this.textvalue} onChange={this.handleValueChange}
				          className={style.textArea} autoFocus={true}/>
			</>
		)
	}
}