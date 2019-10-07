const merge = require("webpack-merge");
const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");
const WorkboxPlugin = require("workbox-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const common = require("./webpack.common");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const prodConfig = merge(common, {
  output: {
    path: path.join(__dirname, "dist")
  },
  devtool: "hidden-source-map",
  module: {
    rules: [
      {
        test: /\.(html)$/,
        use: {
          loader: "html-loader",
          options: {
            attrs: ["use:xlink:href", "img:src"]
          }
        }
      }
    ]
  },
  plugins: [
    new UglifyJsPlugin({
      test: /\.js(\?.*)?$/i
    }),
    new CleanWebpackPlugin(["dist"]),
    new WorkboxPlugin({
      clientsClaim: true,
      skipWaiting: true
    }),
    new CopyWebpackPlugin([
      { from: "src/robots.txt", to: "robots.txt" },
      { from: "src/sitemap.xml", to: "sitemap.xml" },
      { from: "src/manifest.json", to: "manifest.json" },
      { from: "src/facebook-image.png", to: "facebook-image.png" }
    ]),
    new ManifestPlugin({
      fileName: "webpack-files-manifest.json"
    })
  ]
});

module.exports = prodConfig;
