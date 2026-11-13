const supportedConfigs = ['dev', 'prod', 'pwa'];

module.exports = function getWebpackConfig(env = {}) {
  const configName = typeof env === 'string'
    ? env
    : supportedConfigs.find((name) => env[name]) || env.config;

  if (!supportedConfigs.includes(configName)) {
    throw new Error(`Unknown webpack configuration: ${configName || 'none'}`);
  }

  return require(`./config/webpack.${configName}.js`);
};
