const path = require('path');

module.exports =
  {
    entry: "./src/index.jsx",
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: "bundle.js"
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)/,
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
