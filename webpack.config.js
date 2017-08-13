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
const UglifyWebpackPlugin = require('uglifyjs-webpack-plugin');

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
  inject: true
});

const uglifyWebpackPlugin = new UglifyWebpackPlugin();

const prodPlugins = IS_PROD
  ? [ uglifyWebpackPlugin ]
  : [];

/**
 * Export config
 */
module.exports = {
  devtool: IS_PROD ? 'source-map' : 'eval-source-map',
  entry: `${srcDirRelative}/index.ts`,
  output: {
    path: distDir,
    filename: '[name].[hash:5].js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.tsx?$/,
        loader: 'tslint-loader',
        include: srcDir,
        exclude: /node_modules/,
        options: {
          configFile: './tslint.json',
          failOnHint: true
        }
      },
      {
        test: /\.tsx?$/,
        include: srcDir,
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
          compilerOptions: {
            module: 'esnext', // allows bundle splitting via dynamic imports!
            target: 'es5'     // output browser-friendly JS
          }
        }
      },
      {
        test: /\.scss$/,
        include: srcDir,
        use: [
          'style-loader',
          {
            loader: 'typings-for-css-modules-loader',
            options: {
              modules: true,
              namedExport: true
            }
          }
        ]
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
    contentBase: srcDir,
    compress: true,
    port: 9000
  }
};
