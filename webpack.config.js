/**
 * webpack.config.js
 *
 * This config serves as both the development and production
 * Webpack config. The difference is that it's consumed by
 * either webpack-dev-server (development) or webpack itself
 * (production)
 */

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

/**
 * Envs
 */
const ENV = process.env.NODE_ENV;
const IS_PROD = ENV === 'production';

/**
 * Directories
 */
const srcDirRelative = './src';
const distDirRelative = './dist';

const srcDir = path.join(__dirname, srcDirRelative);
const distDir = path.join(__dirname, distDirRelative);

/**
 * Plugins
 */
const definePlugin = new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify(ENV)
});

const noEmitOnErrorsPlugin = new webpack.NoEmitOnErrorsPlugin();

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  title: 'Sample TypeScript App',
  inject: true,
  hash: true
});

const uglifyJsPlugin = new UglifyJSPlugin();

const prodPlugins = IS_PROD
  ? [
    uglifyJsPlugin
  ]
  : [];

/**
 * Export config
 */
module.exports = {
  devtool: IS_PROD ? 'cheap-source-map' : 'eval-source-map',
  entry: `${srcDirRelative}/index.ts`,
  output: {
    path: distDir,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        include: [ srcDir ]
      }
    ]
  },
  plugins: [
    definePlugin,
    noEmitOnErrorsPlugin,
    htmlWebpackPlugin,
    ...prodPlugins
  ],
  devServer: {
    contentBase: path.join(srcDir, 'assets'),
    compress: true,
    port: 9000
  }
};
