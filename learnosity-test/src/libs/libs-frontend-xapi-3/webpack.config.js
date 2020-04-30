/* global __dirname, require, module*/

const webpack = require('webpack');
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const env = require('yargs').argv.env;
// contains externals function that ignores node_modules when bundling in Webpack
const nodeExternals = require('webpack-node-externals');
const package_version = require('./package.json').version;

let pathsToClean = [
  'dist'
];

let xapirunner = 'xapirunner';

let plugins = [
  new CopyWebpackPlugin(
    [ 
      {   from:  __dirname + '/src/js/active_time_worker.js',
          to:  __dirname + '/dist/js/active_time_worker.js'
      }
    ]
  )
];

if (env === 'build') {
  plugins.push(
    new UglifyJsPlugin({
      sourceMap: true,
      uglifyOptions: {
        compress: true
      }
    })
  );
  xapirunner = xapirunner + '-min-' + package_version;
} else {
  plugins.unshift(new CleanWebpackPlugin(pathsToClean));
}

const config = {
  entry: {
    [xapirunner] : __dirname + '/src/js/index.js'
  },
  devtool: 'source-map',
  output: {
    path: __dirname + '/dist/js',
    filename: '[name].js',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: 'string-replace-loader',
        query: {
          flags: 'g',
          search: '{{package_version}}',
          replace: package_version
        },
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    modules: [path.resolve('./node_modules'),path.resolve('./bower_components'), path.resolve('./src')],
    extensions: ['.json', '.js']
  },
  plugins: plugins,
  externals: nodeExternals() // in order to avoid bundling of modules in node_modules folder
};

module.exports = config;
