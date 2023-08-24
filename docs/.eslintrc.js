/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

const getTwConfig = () => path.resolve(__dirname, 'tailwind.config.js');
const getTsConfig = () => path.resolve(__dirname, 'tsconfig.json');

module.exports = {
  root: true,
  parserOptions: {
    project: getTsConfig(),
  },
  extends: [
    '../.eslintrc',
    'plugin:@next/next/recommended',
    'plugin:tailwindcss/recommended',
  ],
  rules: {
    'tailwindcss/classnames-order': ['warn', { config: getTwConfig() }],
    'tailwindcss/no-custom-classname': ['warn', { config: getTwConfig() }],
    'import/extensions': ['error', {
      ts: 'never',
    }],
  },
};
