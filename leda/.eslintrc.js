const path = require('path');

exports.parserOptions = {
  project: path.join(__dirname, '..', 'tsconfig.json'),
};

exports.extends = [
  'airbnb-typescript',
  'plugin:@typescript-eslint/recommended-requiring-type-checking',
  'plugin:jest/recommended',
  'plugin:jest/style',
];

exports.rules = {
  /* stylistic-issues */
  'max-len': ['error', 200, {
    ignoreComments: true,
    ignoreTemplateLiterals: true,
  }],

  /* best-practices */
  'no-param-reassign': ['error', {
    props: false,
  }],

  '@typescript-eslint/prefer-regexp-exec': 'warn',
  '@typescript-eslint/restrict-template-expressions': 'warn',
  '@typescript-eslint/unbound-method': 'warn',

  'import/no-cycle': 'warn',
  'import/prefer-default-export': 'off',

  'jsx-a11y/click-events-have-key-events': 'warn',
  'jsx-a11y/mouse-events-have-key-events': 'warn',
  'jsx-a11y/no-static-element-interactions': 'warn',

  'react/destructuring-assignment': 'off',
  'react/jsx-props-no-spreading': 'off',
};
