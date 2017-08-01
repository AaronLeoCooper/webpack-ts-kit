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
        include: [ srcDir ],
        options: {
          compilerOptions: {
            /**
             * Custom ts options are required since the testing suite
             * requires 'commonjs' modules and es6 target
             */
            module: 'esnext', // allows bundle splitting on dynamic imports!
            target: 'es5'     // to transpile to browser-friendly ES5
          }
        }
      }
    ]
  },
  plugins: [
    definePlugin,
    noEmitOnErrorsPlugin,
    htmlWebpackPlugin
  ],
  devServer: {
    contentBase: srcDir,
    compress: true,
    port: 9000
  }
};
