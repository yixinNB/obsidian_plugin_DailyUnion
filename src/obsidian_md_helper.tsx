import {activatedEditor} from "./MDView";
import {dataContainor} from "./data_container";

/**
 * auto finish input
 */
export function checkRow_is_DailyUnion() {
	let cursorPosition = activatedEditor.getCursor()//{ch: 3 line: 2} column row
	let lineContent = activatedEditor.getLine(cursorPosition.line)
	if (lineContent == "-[" || lineContent == "-[]" || lineContent == "]]") {
		let taskRow = "-[DailyUnion:" + dataContainor.create() + "]"
		activatedEditor.setLine(cursorPosition.line, taskRow)
	}
}
