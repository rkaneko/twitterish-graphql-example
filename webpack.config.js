const path = require("path");
const webpack = require("webpack");

const config = {
  entry: {
    index: path.join(__dirname, "src", "entrypoint", "index.tsx"),
  },
  output: {
    path: path.join(__dirname, "public", "static"),
    filename: "[name].bundle.js",
    publicPath: "/static",
  },
  devtool: "inline-source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  node: {
    fs: "empty",
    child_process: "empty",
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        use: [
          {
            loader: "ts-loader",
          },
        ],
      },
      {
        test: /\.(js|mjs|jsx)$/,
        enforce: "pre",
        use: [
          {
            loader: "source-map-loader",
          },
        ],
        exclude: [
        ],
      },
    ],
  },
};

module.exports = (env, argv) => {
  if (argv && argv.mode === "development") {
    config.devtool = "source-map";
  }
  if (argv && argv.mode === "production") {
    config.devtool = false;
  }
  return config;
};
