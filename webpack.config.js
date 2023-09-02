const path = require("path");
const webpack = require("webpack");

module.exports = {
  target: "electron-renderer",
  resolve: {
    fallback: {
      fs: false,
      path: require.resolve("path-browserify"),
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
  ],
};
