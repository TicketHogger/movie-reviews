const path = require('path');

module.exports = {
  entry: './client/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'review.bundle.js'
  },
  module: {
    rules: [
      { test: /\.jsx$/, use: 'babel-loader' }
    ]
  }
};
