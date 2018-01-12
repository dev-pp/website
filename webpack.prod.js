const merge = require('webpack-merge');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const common = require('./webpack.common');

const prodConfig = merge(common, {
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'hidden-source-map',
  module: {
    rules: [
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: ['use:xlink:href', 'img:src']
          }
        }
      },
      {
        test: /\.svg$/,
        use: 'file-loader'
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new WorkboxPlugin({
      clientsClaim: true,
      skipWaiting: true
    }),
    new CopyWebpackPlugin([
      { from: 'src/robots.txt', to: 'robots.txt' },
      { from: 'src/sitemap.xml', to: 'sitemap.xml' },
      { from: 'src/manifest.json', to: 'manifest.json' },
    ]),
    new ManifestPlugin({
      fileName: 'webpack-files-manifest.json'
    }),
  ]
});

module.exports = prodConfig;