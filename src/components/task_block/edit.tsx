import {BeautifulTextArea} from "../beautifulTextArea/beautifulTextArea";
import {TaskBlocks_data_handler} from "./objects";


export function Task_block_component_edit({data}:{data:TaskBlocks_data_handler}) {
	return (
		<div>
			<BeautifulTextArea  data={data}/>
		</div>
	)
}

// import {App, Modal, Notice, Setting} from "obsidian";
// import {component_normal} from "../task_block.stories";
// import {renderToStaticMarkup} from "react-dom/server"
// export class Task_editor_Modal extends Modal {
	// onOpen() {
	// 	let {contentEl} = this;
	// 	// contentEl.setText("Look at me, I'm a modal! 👀");
	//
	// 	contentEl.innerHTML = renderToStaticMarkup(component_normal())
	//
	// 	// const textarea=contentEl.createEl("textarea");
	// 	// textarea.addClass("task_content_input")
	// 	// textarea.setAttribute("style","width: 100%;")
