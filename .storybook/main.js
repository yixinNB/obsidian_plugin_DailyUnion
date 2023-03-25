module.exports = {
  "stories": ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", "@storybook/addon-mdx-gfm"],
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