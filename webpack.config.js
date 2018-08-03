const path = require('path')
const html = require('html-webpack-plugin')
const CustomWebpackHook = require('./customWebpackHook')

module.exports = (env = {}, args = {}) => {
  return {
    devtool: 'cheap-module-eval-source-map',
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            query: {
              presets: ['react']
            }
          }
        },
        {
          test: /\.jsx$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            query: {
              presets: ['react']
            }
          }
        },
        {
          test: /\.(scss)$/,
          use: [
            {
              loader: 'style-loader' // inject CSS to page
            },
            {
              loader: 'css-loader' // translates CSS into CommonJS modules
            },
            {
              loader: 'postcss-loader', // Run post css actions
              options: {
                plugins: function () {
                  // post css plugins, can be exported to postcss.config.js
                  return [require('precss'), require('autoprefixer')]
                }
              }
            },
            {
              loader: 'sass-loader' // compiles SASS to CSS
            }
          ]
        },
        {
          test: /\.html$/,
          use: {
            loader: 'html-loader',
            options: { minimize: true }
          }
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.ico$/,
          include: path.resolve(__dirname, 'media/images'),
          use: {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
          }
        },
        {
          test: /\.(gif|png|jpe?g|svg)$/i,
          use: [
            'file-loader',
            {
              loader: 'image-webpack-loader',
              options: {
                bypassOnDebug: true
              }
            }
          ]
        },
        {
          test: /\.(otf|eot|ttf|woff|woff2)$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 10000
            }
          }
        }
      ]
    },
    devServer: {
      port: 3000,
      historyApiFallback: true
    },
    plugins: [
      new html({
        template: './public/index.html',
        filename: './index.html'
      }),
      new CustomWebpackHook()
    ],
    output: {
      publicPath: '/',
      filename: '[name].bundle.js'
    },
    resolve: {
      extensions: ['.js', '.css', '.jsx'],
    }
  }
}
