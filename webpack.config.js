/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const CircularDependencyPlugin = require('circular-dependency-plugin');

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  devtool: 'cheap-module-source-map',
  entry: {
    main: './demo/index.tsx',
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.jsx'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve('./dist/demo'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
    ],
  },
  devServer: {
    contentBase: [
      path.join(__dirname, 'public'),
    ],
    port: 9000,
    compress: true,
    open: false,
    overlay: true,
    historyApiFallback: true,
    watchContentBase: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000,
    },
  },
  optimization: {
    usedExports: true,
  },
  plugins: [
    new CircularDependencyPlugin({
      // exclude detection of files based on a RegExp
      exclude: /node_modules/,
      // include specific files based on a RegExp
      include: /leda/,
      // add errors to webpack instead of warnings
      failOnError: false,
      // allow import cycles that include an asyncronous import,
      // e.g. via import(/* webpackMode: "weak" */ './file.js')
      allowAsyncCycles: true,
      // set the current working directory for displaying module paths
      cwd: process.cwd(),
    }),
  ],
};
