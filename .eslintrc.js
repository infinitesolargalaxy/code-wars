module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'plugin:mocha/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'mocha/no-skipped-tests': 'error',
    'mocha/no-exclusive-tests': 'error',
    'mocha/no-setup-in-describe': 'off',
    'mocha/no-mocha-arrows': 'off',
    'no-use-before-define': 'off',
    'no-plusplus': 'off',
    'mocha/max-top-level-suites': 'off',
    'mocha/no-exports': 'off',
    'import/prefer-default-export': 'off',
    'no-var': 'error',
    semi: 'error',
    indent: ['error', 2, { SwitchCase: 1 }],
    'no-multi-spaces': 'error',
    'space-in-parens': 'error',
    'no-multiple-empty-lines': 'error',
    'prefer-const': 'error',
    'max-len': 'off',
    'no-bitwise': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: ['**/**/*.test.ts', '**/**/*.test.js'] }],
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
