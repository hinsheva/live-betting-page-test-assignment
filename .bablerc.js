module.exports = {
  presets: [
    [
      '@babel/env',
      {
        targets: '> 0.25%, not dead, safari 11',
      },
    ],
    '@babel/react',
  ],
  plugins: ['@babel/plugin-proposal-export-default-from'],
};
