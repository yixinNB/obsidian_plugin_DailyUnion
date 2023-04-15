import type {StorybookConfig} from "@storybook/react-vite";

const config: StorybookConfig = {
	stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
	addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", "storybook-preset-less"],
	framework: {
		name: "@storybook/react-vite",
		options: {}
	},
	core: {
		disableTelemetry: true // 👈 Disables telemetry
	},
	docs: {
		autodocs: "tag"
	}
};
export default config;
