import {Kanban} from "./kanban";

export default {
	title: "test",
	component: Kanban,
}
export const Default = () => <Kanban/>
export const large = {
	args: {
		test: "storybook"
	}
}
