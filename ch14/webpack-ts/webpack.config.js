var path = require('path');
module.exports = {
  entry: './src/entry1.ts',
  output: {
	filename: 'build1.js',
	path: path.resolve(__dirname, 'dist')
  },
  module:{
        loaders:[{
            test: /\.tsx?$/,
            loader: 'ts-loader',
            options: {
                transpileOnly: true
            }
        }]
  }
};