module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        targets: {
          node: true,
        },
      },
    ],
    '@babel/typescript',
  ],
  plugins: [
   
    [
      '@babel/plugin-proposal-class-properties',
      {
        loose: true,
      },
    ],
    [
      'module-resolver',
      {
        root: ['.next/production-server'],
        alias: {
          '@server': './',
        },
      },
    ],
  ],
};
