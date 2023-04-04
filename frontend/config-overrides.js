const {
  override,
  disableEsLint,
  addWebpackAlias,
} = require('customize-cra');
const path = require('path');

const patchOutputPath = () => (config) => {
  if (config.mode === 'development') {
    return config;
  }

  config.output = {
    ...config.output,
    path: path.resolve(__dirname, 'build'),
    filename: 'main.js',
    chunkFilename: '[name].chunk.js',
    publicPath: '/',
  };

  const cssPlugin = config.plugins.find(p => p.constructor.name === 'MiniCssExtractPlugin');
  cssPlugin.options.filename = '[name].[contenthash:8].css';
  cssPlugin.options.chunkFilename = '[name].[contenthash:8].chunk.css';

  config.module.rules[1].oneOf = config.module.rules[1].oneOf.map((one) => {
    if (one.options && one.options.name) {
      one.options.name = '[name].[ext]';
    }

    return one;
  });

  return config;
}

module.exports = override(
  disableEsLint(),
  addWebpackAlias({
    ['@']: path.resolve(__dirname, 'src')
  }),
  patchOutputPath()
);