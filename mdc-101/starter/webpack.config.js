const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

function getStyleUse(outputFilename) {
  return [
    MiniCssExtractPlugin.loader,
    'css-loader',
    {
      loader: 'sass-loader',
      options: {
        implementation: require('sass')
      }
    }
  ];
}

module.exports = [
  {
    mode: 'development',
    entry: './login.scss',
    output: {
      filename: 'style-bundle-login.js',
    },
    module: {
      rules: [{
        test: /login.scss$/,
        use: getStyleUse('bundle-login.css')
      }]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'bundle-login.css'
      }),
      new HtmlWebpackPlugin({
        template: './index.html',
        filename: 'login.html',
        chunks: ['bundle-login']
      })
    ]
  },
  {
    mode: 'development',
    entry: './home.scss',
    output: {
      filename: 'style-bundle-home.js',
    },
    module: {
      rules: [{
        test: /home.scss$/,
        use: getStyleUse('bundle-home.css')
      }]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'bundle-home.css'
      }),
      new HtmlWebpackPlugin({
        template: './index.html',
        filename: 'home.html',
        chunks: ['bundle-home']
      })
    ]
  },
  {
    mode: 'development',
    entry: "./login.js",
    output: {
      filename: "bundle-login.js"
    },
    module: {
      rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
        filename: 'login.html',
        chunks: ['bundle-login']
      })
    ]
  },
  {
    mode: 'development',
    entry: "./home.js",
    output: {
      filename: "bundle-home.js"
    },
    module: {
      rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
        filename: 'home.html',
        chunks: ['bundle-home']
      })
    ]
  }
];