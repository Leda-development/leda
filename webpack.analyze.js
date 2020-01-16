const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  entry: {
    main: './demo/index.tsx',
  },
  output: {
    filename: '[name].js',
    path: path.resolve('./dist/demo'),
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.jsx'],
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
            }
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
