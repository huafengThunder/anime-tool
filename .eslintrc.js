module.exports = {
  root: true,
  env: {
    node: true
  },
  parser: 'vue-eslint-parser',
  extends: [
    'plugin:vue/essential', // vue里必须的规则
    '@vue/standard', // @vue/eslint-config-standard
    // 'prettier/@typescript-eslint'  // 优先 prettier 中的样式规范,
  ],
  rules: {
    camelcase: 0,
    'comma-dangle': [2, 'only-multiline'],
    indent: 0,
    'no-extend-native': 2,
    'no-multiple-empty-lines': 0,
    'no-return-assign': 0,
    'object-curly-spacing': 0,
    'space-before-function-paren': [0, 'always'],
    // 'vue/no-use-v-if-with-v-for': 0,
    // 'import/dynamic-import-chunkname': [2, {
    //   importFunctions: ['dynamicImport'],
    //   webpackChunknameFormat:''
    // }]
  },
  plugins: ['@typescript-eslint'],
  parserOptions: {
    parser: '@typescript-eslint/parser'
  }
}
