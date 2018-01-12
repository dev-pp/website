const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const config = {
  entry: {
    main: path.join(__dirname, 'src', 'main'),
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
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        // options: {
        //   loaders: {
        //     // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
        //     // the "scss" and "sass" values for the lang attribute to the right configs here.
        //     // other preprocessors should work out of the box, no loader config like this necessary.
        //     'scss': [
        //       'vue-style-loader',
        //       'css-loader',
        //       'sass-loader'
        //     ],
        //     'sass': [
        //       'vue-style-loader',
        //       'css-loader',
        //       'sass-loader?indentedSyntax'
        //     ]
        //   }
        //   // other vue-loader options go here
        // }
      },
      {
        test: /\.svg$/,
        use: 'file-loader'
      },
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
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