const webpack = require("webpack");
const path = require("path");

const config = {
  entry: path.resolve(__dirname, "side-nav/index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [{ test: /\.js||\.jsx$/, exclude: /node_modules/, loader: "babel-loader" }]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
};

module.exports = config;
