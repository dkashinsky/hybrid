const path = require('path');

module.exports = {
  entry: './src/ajs/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'src/ajs'),
  },
};
