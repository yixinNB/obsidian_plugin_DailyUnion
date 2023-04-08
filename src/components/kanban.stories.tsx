import {Kanban} from "./kanban";

export default {
	title: "kanban test",
	component: Kanban,
}
export const Default = () => <Kanban/>
export const large = {
	args: {
		test: "storybook"
	}
}
