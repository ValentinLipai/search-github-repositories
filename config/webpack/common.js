const path = require('path').resolve;
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: path(__dirname, '..', '..', 'index.tsx'),
  },
  devtool: 'inline-source-map',
  output: {
    filename: '[name].[hash].js',
    path: path(__dirname, '..', '..', 'build'),
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      Components: path(__dirname, '../../src/components'),
      Assets: path(__dirname, '../../src/assets'),
      Pages: path(__dirname, '../../src/pages'),
      Helpers: path(__dirname, '../../src/helpers'),
      Types: path(__dirname, '../../src/types'),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/images/[hash]-[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path(__dirname, '..', '..', 'public', 'index.html'),
    }),
  ],
};
