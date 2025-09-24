module.exports = {
  presets: [
    ['@babel/preset-env', {
      targets: {
        node: 'current',
      },
      useBuiltIns: 'usage',
      corejs: 3,
    }],
    '@babel/preset-typescript',
  ],
  plugins: [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-transform-class-properties',
    '@babel/plugin-transform-private-methods'
  ],
};