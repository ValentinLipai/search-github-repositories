const { merge } = require('webpack-merge');
const productionConfig = require('./config/webpack/production');
const developmentConfig = require('./config/webpack/development');

const commonConfiguration = require('./config/webpack/common');

module.exports = (_env, { mode }) => {
  const properlyConfig = mode === 'development' ? developmentConfig : productionConfig;
  const mergedConfig = merge(commonConfiguration, properlyConfig);

  return mergedConfig;
};
