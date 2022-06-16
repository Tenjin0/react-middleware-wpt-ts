const path = require('path');
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV ? process.env.NODE_ENV === "development" : true
const config = {
  mode: devMode ?"development" : "production",
  entry: {
    app: [path.join(__dirname, './src/main.tsx')],
    vendor: [
      'react', 'react-dom', 'redux', 'react-redux', 'reactstrap', 'socket.io-client', 'redux-thunk', '@fortawesome/fontawesome-svg-core'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: "/",
    filename: 'js/[name].bundle.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.tsx', '.ts'] // .mjs must be before .js

  },
  module: {
    rules: [

      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader'
      },
      {
        test: /\.(css|sass|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                require('autoprefixer')
              ],
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
          }
        }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
      baseUrl: "/"
    }),
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}

if (devMode) {
  config.entry.app.push('webpack-hot-middleware/client')
}

module.exports = config