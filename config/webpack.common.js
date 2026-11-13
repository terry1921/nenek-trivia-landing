const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const projectRoot = path.resolve(__dirname, '..');

module.exports = {
  entry: {
    app: './_src/index.js',
  },
  output: {
    path: projectRoot,
    filename: 'assets/[name].bundle.js',
    assetModuleFilename: 'assets/[name][contenthash:8][ext]',
    publicPath: '/',
  },
  plugins: [
    new FaviconsWebpackPlugin({
      logo: path.resolve(projectRoot, 'icon.png'),
      outputPath: 'assets',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(projectRoot, '_src/template/default.html'),
      filename: '_layouts/default.html',
      scriptLoading: 'defer',
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].css',
    }),
    new CopyWebpackPlugin({
      patterns: [{
        from: path.resolve(projectRoot, '_images'),
        to: 'assets/images',
      }],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(css|scss)$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              url: {
                filter: (url) => !url.startsWith('/'),
              },
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                config: path.resolve(__dirname, 'postcss.config.js'),
              },
            },
          },
          {
            loader: 'sass-loader',
            options: { implementation: require('sass') },
          },
        ],
      },
      {
        test: /\.(png|svg|jpe?g|gif|webp)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
