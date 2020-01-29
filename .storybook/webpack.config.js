module.exports = async ({ config }) => console.dir(config, { depth: null }) || config;
module.exports = function({ config }) { // for source code display
    config.module.rules.push({
      test: /\.stories\.jsx?$/,
      loaders: [require.resolve('@storybook/source-loader')],
      enforce: 'pre',
    });
   
    return config;
  };