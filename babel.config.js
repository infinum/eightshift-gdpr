module.exports = {
  'presets': [
    [
      '@babel/preset-env',
      {
        modules: false,
        useBuiltIns: 'entry',
        corejs: '2',
        targets: {
          browsers: [
            'last 2 versions',
            'not ie < 11',
            'android >= 4.2'
          ]
        }
      }
    ]
  ],
  'plugins': [
    '@babel/plugin-syntax-dynamic-import'
  ],
};
