const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  entry: {
    main: './demo/index.tsx',
  },
  output: {
    path: path.resolve('dist', 'demo'),
    filename: '[name].js',
  },
  resolve: {
    extensions: [
      '.js', '.jsx',
      '.ts', '.tsx',
    ],
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
  optimization: {
    usedExports: true,
  },
  plugins: [
    new BundleAnalyzerPlugin(),
  ],
};
