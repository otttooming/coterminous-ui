const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./docs/index.tsx",

  output: {
    filename: "bundle.js"
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"],

    alias: {
      'next-styled': path.join(__dirname, "./src")
    }
  },

  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: "ts-loader" },
    ]
  },

  devServer: {
    contentBase: 'docs/'
  }
};

