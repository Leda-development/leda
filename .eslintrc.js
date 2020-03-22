exports.root = true;

exports.reportUnusedDisableDirectives = true;

exports.extends = [
  'airbnb',
  'airbnb/hooks',
  'plugin:@typescript-eslint/recommended',
  'plugin:import/typescript',
];

exports.rules = {
  /* possible-errors */
  'no-console': ['error', {
    allow: ['error', 'warn'],
  }],

  /* best-practices */
  'no-unused-expressions': 'off',
  'no-param-reassign': ['error', {
    props: false,
  }],

  /* stylistic-issues */
  'max-len': ['error', 160],

  /* ecmascript-6 */
  'prefer-template': 'off',

  '@typescript-eslint/ban-ts-ignore': 'warn',
  '@typescript-eslint/explicit-function-return-type': 'off',
  '@typescript-eslint/no-empty-function': 'off',
  '@typescript-eslint/no-unused-expressions': 'error',
  '@typescript-eslint/no-var-requires': 'off',
  '@typescript-eslint/member-delimiter-style': ['error', {
    multiline: {
      delimiter: 'comma',
    },
    singleline: {
      delimiter: 'comma',
    },
  }],

  'import/extensions': 'off',
  'import/prefer-default-export': 'off',
  'import/no-extraneous-dependencies': ['error', {
    devDependencies: true,
  }],

  'react/destructuring-assignment': 'off',
  'react/jsx-first-prop-new-line': 'off',
  'react/jsx-one-expression-per-line': 'off',
  'react/jsx-props-no-spreading': 'off',
  'react/jsx-filename-extension': ['error', {
    extensions: ['.jsx', '.tsx'],
  }],
};
