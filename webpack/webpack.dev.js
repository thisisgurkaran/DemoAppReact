const webpack = require("webpack");

const devConfig = {
  mode: "development",
  devtool: "cheap-module-source-map",
  plugins: [
    new webpack.DefinePlugin({
      "process.env.name": JSON.stringify("karandev"),
    }),
  ],
};

module.exports = { devConfig };
