const path = require('path');
const HtmlWebpackPuglin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, 'assets', 'scripts', 'hero'),
  output: {
    path: '/',
    filename: 'bundle.js',
    publicPath: '/dist'
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPuglin({
      template: 'index.html'
    })
  ]
}