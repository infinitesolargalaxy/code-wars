module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'plugin:mocha/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'mocha/no-skipped-tests': 'error',
    'mocha/no-exclusive-tests': 'error',
    'mocha/no-mocha-arrows': 'off',
  },
  plugins: [
    'mocha',
  ],
  settings: {
    'mocha/additionalCustomNames': [
      { name: 'describeModule', type: 'suite', interfaces: ['BDD'] },
      { name: 'testModule', type: 'testCase', interfaces: ['TDD'] },
    ],
  },
};
