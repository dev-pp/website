const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const config = {
  entry: {
    app: path.join(__dirname, 'src', 'app'),
    polyfills: path.join(__dirname, 'src', 'assets', 'js', 'polyfills'),
  },
  output: {
    filename: '[name].bundle.[hash].js',
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
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
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            'css-loader',
            'sass-loader'
          ]
        }),
        exclude: /node_modules/,
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[id]-[name].[hash].style.css',
      allChunks: true,
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
      favicon: path.join(__dirname, 'src', 'favicons', 'favicon.ico'),
      excludeChunks: ['polyfills'],
    }),
  ]
};

module.exports = config;