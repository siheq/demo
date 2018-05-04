// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: [
    'standard',
    'plugin:vue/recommended',  
  ],
  // required to lint *.vue files
  plugins: [
    'html',
    'vue',
  ],
  // add your custom rules here
  'rules': {
    // // allow paren-less arrow functions
    // 'arrow-parens': 0,
    // // allow async-await
    // 'generator-star-spacing': 0,
    // // allow debugger during development
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
    'arrow-parens': ['error', 'as-needed'],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'semi': ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    'brace-style': ['error', 'stroustrup'],
    'prefer-template': 'error',
    'object-curly-spacing': ['error', 'never'],
    'vue/attribute-hyphenation': ['error', 'always'],
    'vue/html-quotes': ['error', 'single'],
    'vue/mustache-interpolation-spacing': ['error', 'never'],
    'vue/name-property-casing': ['error', 'PascalCase'],
    'vue/no-multi-spaces': ['error'],
    'vue/v-bind-style': ['error', 'shorthand'],
    'vue/v-on-style': ['error', 'shorthand'],
    'vue/require-v-for-key': ['off'],
    // 'ava/assertion-arguments': 'error',
    // 'ava/max-asserts': ['off', 5],
    // 'ava/no-async-fn-without-await': 'error',
    // 'ava/no-cb-test': 'off',
    // 'ava/no-duplicate-modifiers': 'error',
    // 'ava/no-identical-title': 'error',
    // 'ava/no-ignored-test-files': 'off',
    // 'ava/no-invalid-end': 'error',
    // 'ava/no-nested-tests': 'error',
    // 'ava/no-only-test': 'error',
    // 'ava/no-skip-assert': 'error',
    // 'ava/no-skip-test': 'error',
    // 'ava/no-statement-after-end': 'error',
    // 'ava/no-todo-implementation': 'error',
    // 'ava/no-todo-test': 'warn',
    // 'ava/no-unknown-modifiers': 'error',
    // 'ava/prefer-async-await': 'error',
    // 'ava/prefer-power-assert': 'off',
    // 'ava/test-ended': 'error',
    // 'ava/test-title': ['error', 'if-multiple'],
    // 'ava/use-t-well': 'error',
    // 'ava/use-t': 'error',
    // 'ava/use-test': 'error',
    // 'ava/use-true-false': 'error',
  }
}
