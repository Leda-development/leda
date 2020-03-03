
const {
  concurrent, series,
} = require('nps-utils');

const nps = {};

exports.scripts = nps;

nps.start = {
  default: series('start.demo'),
  demo: series('clean.assets', 'sass.build', 'wds.demo'),
  docs: series('clean.assets', 'sass.build', 'wds.docs'),
};

nps.build = series('clean.dist', concurrent('type', 'sass'));

nps.check = concurrent('lint', 'test', 'type');

nps.lint = series('start.eslint');
nps.test = series('start.jest');
nps.type = series('start.tsc');

nps.eslint = 'eslint --color --ext .ts,.tsx leda';
nps.jest = 'jest --color';
nps.tsc = 'tsc';

nps.clean = {
  assets: 'rimraf public/assets/*',
  dist: 'rimraf dist/*',
};

nps.cypress = {
  default: series('cypress.test'),
  open: 'start-test "nps wds" 9000 "cypress open"',
  test: 'start-test "nps wds" 9000 "cypress run"',
};

nps.fonts = {
  dist: 'ncp styles/webfonts dist/assets/css/webfonts',
  public: 'ncp styles/webfonts public/assets/css/webfonts',
};

nps.sass = {
  default: series('fonts.dist', 'node-sass --output dist/styles styles'),
  build: series('fonts.public', 'node-sass --output public/assets/css styles'),
  watch: series('fonts.public', 'node-sass --output public/assets/css styles --watch'),
};

nps.wds = {
  default: 'webpack-dev-server',
  demo: 'webpack-dev-server --hot',
  docs: 'webpack-dev-server --hot --config webpack.docs.js',
};

nps.webpack = {
  analyze: 'webpack --mode production --config webpack.analyze.js',
};
