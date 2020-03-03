module.exports = {
  presets: [
    '@vue/app', // 两种方式都可以
  ],
  // presets: [
  //   '@vue/cli-plugin-babel/preset',
  //   ['@babel/preset-env', { 'modules': false }],
  // ],
  plugins: [
    [
      'component',
      {
        'libraryName': 'element-ui',
        'styleLibraryName': 'theme-chalk',
      },
    ],
  ],
};
