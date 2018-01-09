const path = require('path');
const HtmlWebpackPuglin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, 'main'),
  output: {
    path: '/',
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              pngquant: {
                quality: '65-90',
                speed: 4
              },
            },
          },
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPuglin({
      template: 'index.html'
    }),
    // expose $ and jQuery to global scope.
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ]
}