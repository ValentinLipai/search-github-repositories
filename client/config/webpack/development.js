const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const scssResources = [
  './src/assets/scss/utils/_mixins.scss',
  './src/assets/scss/utils/_variables.scss',
];

module.exports = {
  devServer: {
    port: '3000',
    static: ['./public'],
    open: true,
    hot: true,
    liveReload: true,
    historyApiFallback: true,
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.module\.s(a|c)ss$/,
        use: [
          'style-loader',
          'css-modules-typescript-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[path][name]__[local]',
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-resources-loader',
            options: {
              resources: scssResources,
            },
          },
        ],
      },
      {
        test: /\.(s(a|c)ss)$/,
        exclude: /\.module\.(s(a|c)ss)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[path][name]__[local]',
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
};
