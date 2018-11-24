const path = require('path');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
  entry: {
    hh: './views/hh/index.js',
    index: './views/index/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.scss'],
    alias: {
      "source":path.resolve("source"),
      "public":path.resolve("public"),
      "routes":path.resolve("routes"),
      "utils":path.resolve("utils"),
      "styles":path.resolve("styles"),
      "images":path.resolve("images"),
      "libs": path.resolve("libs")
    }
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            // you can specify a publicPath here
            // by default it use publicPath in webpackOptions.output
            // publicPath: './public'
          }
        },
        'css-loader',
        'postcss-loader', {
          loader: 'px2rem-loader',
          // options here
          options: {
            remUnit: 100
          }
        },
        'sass-loader',
      ]
    }, {
      test: /\.css$/,
      use: [ {
        loader: MiniCssExtractPlugin.loader,
        options: {
          // you can specify a publicPath here
          // by default it use publicPath in webpackOptions.output
          // publicPath: './public'
        }
      }, 'css-loader', {
        loader: 'px2rem-loader',
        // options here
        options: {
          remUnit: 100
        }
      } ]
    }, {
      test: /\.(png|jpg|gif)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 5000
          }
        }
      ]
    }]
  },
  plugins: [
    new cleanWebpackPlugin(['dist']), //清理public/static

    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],

  watch: true,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000,
    ignored: /node_modules/
  }
};