const webpack = require('webpack');
module.exports = {
  module: {
    loaders: [
      {
        test: /\.json$/,
        loaders: [
          'json-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        enforce: 'pre'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          'babel-loader'
        ]
      },
      {
        test: /\.(png||svg||gif)$/,
        loader: 'file-loader?name=images/[name].[ext]'
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        include: path.resolve('../src/images'),
        options: {
          extract: true,
          spriteFilename: 'icon.svg'
        }
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {},
      debug: true
    })
  ],
  devtool: 'source-map',
  externals: {
    'react/lib/ExecutionEnvironment': 'true',
    'react/lib/ReactContext': 'true'
  }
};
