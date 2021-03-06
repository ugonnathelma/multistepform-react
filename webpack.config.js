const path = require('path');

module.exports =
  {
    entry: "./index.js",
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: "index.js"
    },
    module: {
      rules: [
        {
          test: /\.js/,
          use: "babel-loader"
        },
        {
          test: /\.jsx/,
          use: "babel-loader"
        },
        {
          test: /\.scss/, use: [{
            loader: "style-loader"
          }, {
            loader: "css-loader"
          }, {
            loader: "sass-loader"
          }]
        }
      ]
    },
    resolve: {
      extensions: [".js", ".jsx", ".scss"]
    }
  }
