const withTypescript = require('@zeit/next-typescript');
const path = require('path');
const withCSS = require('@zeit/next-css');

module.exports = withCSS(
  withTypescript({
    useFileSystemPublicRoutes: false,
    webpack: async function(config, { buildId, dev }) {
      const originalEntry = config.entry;
      config.entry = async () => {
        const entries = await originalEntry();

        return entries;
      };

      config.watchOptions = {
        ignored: [/\.git\//, /\.next\//, /node_modules/],
      };

      config.resolve = {
        ...config.resolve,
        ...{
          alias: {
            ...config.resolve.alias,
            '@pages': path.resolve(__dirname, 'pages'),
            '@src': path.resolve(__dirname, 'ui'),
          },
        },
      };

      return config;
    },
  }),
);
