const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.tsx"],
  // Add any Storybook addons you want here: https://storybook.js.org/addons/
  addons: [
    {
      name: "@storybook/essentials",
      options: {
        configureJSX: true,
      },
    },
    "@storybook/addon-docs",
    "@storybook/addon-controls",
    "@storybook/addon-actions",
    "@storybook/addon-a11y",
    "@storybook/addon-viewport",
    "storybook-addon-designs",
  ],
  core: {
    builder: "webpack5",
  },
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
      include: path.resolve(__dirname, "../"),
    });

    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve("babel-loader"),
      options: {
        presets: [["react-app", { flow: false, typescript: true }]],
      },
    });
    config.resolve.extensions.push(".ts", ".tsx");

    return config;
  },
};
