const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/app.jsx',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react'
          ]
        }
      },
      {
        test: /\.css$/,
        // use: ['style-loader', 'css-loader'], // for styles in tag <style>
        loader: ExtractTextPlugin.extract({ // for single css-files
          fallback: 'style-loader',
          use: ['css-loader'],
        }),
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        }),
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          name: 'img/[name].[ext]'
        }
      },
      {
        test: function(filename) {
          if (/\.ttf/.test(filename) && filename.includes('Small')) {
            return true;
          }

          return false;
        },
        loader: `url-loader?limit=10000&mimetype=application/octet-stream&name=./fonts/Small/[name].[ext]`,
      },
      {
        test: function(filename) {
          if (/\.ttf/.test(filename) && filename.includes('Medium')) {
            return true;
          }

          return false;
        },
        loader: `url-loader?limit=10000&mimetype=application/octet-stream&name=./fonts/Medium/[name].[ext]`,
      },
      {
        test: function(filename) {
          if (/\.ttf/.test(filename) && filename.includes('Large')) {
            return true;
          }

          return false;
        },
        loader: `url-loader?limit=10000&mimetype=application/octet-stream&name=./fonts/Large/[name].[ext]`,
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/index.html')
    }),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      server: {
        baseDir: './dist'
      }
    }),
    new CleanWebpackPlugin(['./dist']),
    new ExtractTextPlugin('styles.css')
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss']
  }
};