const path = require('path');
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin');

const devMode = process.env.NODE_ENV ? process.env.NODE_ENV === "development" : true

const config = {
	mode: "development",
	entry: {
		app: [path.join(__dirname, './src/index.ts'), 'webpack-hot-middleware/client'],
		vendor: [
			'react', 'react-dom', 'redux', 'react-redux'
		]
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: "/",
		filename: 'js/[name].bundle.js'
	},
	devtool: 'source-map',
	resolve: {
		extensions: [ '.js', '.jsx', '.json', '.tsx', '.ts'], // .mjs must be before .js

	},
	module: {
		rules: [{
				test: /\.(ts|tsx)$/,
				loader: 'ts-loader'
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src', 'index.html'),
			baseUrl: "/"
		}),
		new webpack.HotModuleReplacementPlugin()
	]
}

module.exports = config