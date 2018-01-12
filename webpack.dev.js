const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common');

const devConfig = merge(common, {
  devtool: 'eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    publicPath: "/",
    port: 9000
  },
});

module.exports = devConfig;