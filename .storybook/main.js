module.exports = {
  "stories": ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions","storybook-preset-less"],
  "framework": {
    name: "@storybook/react-webpack5",
    options: {}
  }
  // core: {
  // 	builder: 'webpack5',
  // 	disableTelemetry: true, // 👈 Disables telemetry
  // },
  ,
  docs: {
    autodocs: true
  }
};
