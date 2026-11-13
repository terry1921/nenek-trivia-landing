const { merge } = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');

module.exports = merge(CommonConfig, {
  mode: 'production',
  output: {
    filename: 'assets/[name]-[contenthash:8].bundle.js',
  },
});
