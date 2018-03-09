const path = require('path');

module.exports = {
  entry : "./index.js",
  mode : 'development',
  module: {
      rules: [
          // the 'transform-runtime' plugin tells babel to require the runtime
          // instead of inlining it.
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
                plugins: ['@babel/transform-runtime']
              }
            }
          }
      ]
  }
}