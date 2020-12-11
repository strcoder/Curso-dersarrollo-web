const { resolve } = require('path');
const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

require('dotenv').config();
const entry = '';
const isDev = (process.env.ENV === 'development');

module.export = {
  entry,
  mode: process.env.ENV,
  output: {
    path: '',
    filename: '',
    publicPath: '/',
  },
  resolve: {
    extensions: [ '.js', '.ts', 'tsx' ]
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        use: [{
          loader: 'ts-loader',
          options: {
            happyPackMode: true,
            traspileOnly: true,
          }
        }],
        exclude: '/node_modules/',
      },
      {
        test: /\.(s*)css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.(png|jpg|svg|gif|jp?g)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/[hash].[ext]',
          esModule: false,
        },
      },
    ]
  },
  devServer: {
    historyApiFallback: true,
  },
  plugin: [
    new MiniCssExtractPlugin({
      filename: isDev ? 'assets/app.css' : 'assets/app-[hash].css',
    }),
  ]
}