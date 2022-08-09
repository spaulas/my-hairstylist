const webpack = require("webpack");
const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");

const devConfig = {
  mode: "development",
  devServer: {
    port: 8080,
    historyApiFallback: {
      index: "index.html",
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        auth: "auth@http://localhost:8081/remoteEntry.js",
        management: "management@http://localhost:8082/remoteEntry.js",
      },
    }),
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
