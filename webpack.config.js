const path = require('path');

module.exports = {
	mode: 'production',
	entry: './src/js/main.js',
	output: {
		path: path.join(__dirname, 'build'),
		filename: '[name].bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js?/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.css?/,
				loader: ['style-loader', 'css-loader']
			}
		]
	},
	devServer: {
		open: true,
		port: 3000,
		publicPath: '/build/',
		clientLogLevel: 'warn'
	}
};