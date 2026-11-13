const path = require('path');
const { merge } = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');

module.exports = merge(CommonConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    filename: 'assets/[name].bundle.js',
  },
  devServer: {
    host: 'localhost',
    port: 8080,
    hot: true,
    static: {
      directory: path.resolve(__dirname, '../_site'),
    },
    watchFiles: ['_site/**/*'],
  },
});
