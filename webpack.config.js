const path = require('path');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const MODE = process.env.WEBPACK_ENV;

module.exports = {
  mode: MODE,
  entry: [
    '@babel/polyfill', // 폴리필 설정 추가
    path.resolve(__dirname, 'assets', 'js', 'main.js'),
  ],
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'static'),
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader', // css 호환성 관련된 것을 해결
            options: {
              postcssOptions: {
                plugins: [
                  [
                    'autoprefixer',
                    {
                      browsers: 'cover 99.5%',
                    },
                  ],
                ],
              },
            },
          },
          {
            loader: 'sass-loader', // sass, scss를 받아서 css 변환
          },
        ],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin({ filename: `[name].css` })],
  //Refused to evaluate a string as JavaScript because 'unsafe-eval' is
  // not an allowed source of script in the following Content Security Policy directive:
  // "script-src 'self' https://archive.org".
  devtool: 'source-map',
};
