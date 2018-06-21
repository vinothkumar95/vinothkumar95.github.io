var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, '../assets/js');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
	entry: APP_DIR + '/index.js',
	output: {
		path: BUILD_DIR,
		filename: 'wordbyword.js'
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		})
	],
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				include: APP_DIR,
				loader: 'babel',
				query:
				{
					presets: ['es2015', 'react']
				}
			},
			{
		  	test: /\.css$/,
		  	loader: "style-loader!css-loader"
		  }
		]
	}
};

module.exports = config;
