const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ENV = process.env.NODE_ENV;
const IS_PROD = ENV === 'production';

const srcDirRelative = './src';
const distDirRelative = './dist';

const srcDir = path.join(__dirname, srcDirRelative);
const distDir = path.join(__dirname, distDirRelative);

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  title: 'Sample TypeScript App',
  inject: true,
  hash: true
});

module.exports = {
  devtool: 'inline-source-map',
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
    htmlWebpackPlugin
  ],
  devServer: {
    contentBase: path.join(srcDir, 'assets'),
    compress: true,
    port: 9000
  }
};
