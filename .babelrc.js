module.exports = {
  presets: [
    [
      '@babel/env',
      {
        targets: '> 0.25%, not dead, safari 11',
      },
    ],
    '@babel/react',
    '@babel/preset-flow',
  ],
  plugins: ['@babel/plugin-proposal-export-default-from'],
};
