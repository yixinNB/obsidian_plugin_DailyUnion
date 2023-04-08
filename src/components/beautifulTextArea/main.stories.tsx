import {BeautifulTextArea} from "./beautifulTextArea";
export default {
	title: "beautiful text area",
	component: T,
}
export function T() {
	return(
		<>
			{/*<textarea defaultValue={"test"} className={style.test} onChange={} onpropertychange="this.style.height=this.scrollHeight + 'px'" onInput="this.style.height=this.scrollHeight + 'px'"/>*/}
			<BeautifulTextArea/>
		</>
	)
}