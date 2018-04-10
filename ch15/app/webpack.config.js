var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'source-map', entry: ['./client/js'],
	output: {
	  path: path.resolve(__dirname, 'dist/client/js'), filename: 'app.js'
	},	
	module: {			
	  loaders: [{
		test: /\.tsx?$/, loader: 'ts-loader',            
		options: {
		  transpileOnly: true              
		}
	  }]
	},        
	plugins: [
	  new webpack.optimize.UglifyJsPlugin({
		compress: { warnings: false }
	  })
	],
	resolve: { extensions: [".ts", ".js"] }
};