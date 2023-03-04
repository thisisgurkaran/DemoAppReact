const { merge } = require("webpack-merge");
const { devConfig } = require("./webpack.dev.js");
const { prodConfig } = require("./webpack.prod.js");

const commonConfig = require("./webpack.common.js");
module.exports = (envVars) => {
  const { env } = envVars; // can be dev or prod
  console.log(env, env === "prod" ? prodConfig : devConfig);
  const finalConfig = merge(
    commonConfig,
    env === "prod" ? prodConfig : devConfig
  );
  return finalConfig;
};
