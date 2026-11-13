const path = require('path');
const { merge } = require('webpack-merge');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const ProdConfig = require('./webpack.prod.js');

module.exports = merge(ProdConfig, {
  plugins: [
    new WebpackPwaManifest({
      filename: 'assets/manifest.json',
      name: 'Nenek Trivia',
      short_name: 'Nenek Trivia',
      description: '¡Hola! en Tenek',
      orientation: 'portrait',
      display: 'standalone',
      start_url: '/',
      theme_color: '#efeeff',
      background_color: '#efeeff',
      icons: [
        {
          src: path.resolve(__dirname, '../icon.png'),
          sizes: [96, 128, 192, 256, 384, 512],
          destination: 'assets',
        },
      ],
    }),
  ],
});
