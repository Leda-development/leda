const postcssImport = require('postcss-import');
const postcssNesting = require('postcss-nesting');
const cssnano = require('cssnano');

module.exports = {
  plugins: [
    postcssImport(),
    postcssNesting(),
    cssnano({ preset: 'default' })
  ],
}