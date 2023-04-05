import {activatedEditor} from "./MDView";
import {dataContainor} from "./data_container";

const regExp1 = RegExp(/^-\[$/)
const regExp2 = RegExp(/^-\[]$/)

export function checkRow_is_DailyUnion() {
	let cursorPosition = activatedEditor.getCursor()//{ch: 3 line: 2} column row
	let lineContent = activatedEditor.getLine(cursorPosition.line)
	if (regExp1.test(lineContent) || regExp2.test(lineContent)) {
		let taskRow = "-[DailyUnion:" + dataContainor.create() + "]"
		activatedEditor.setLine(cursorPosition.line, taskRow)
	}

}
