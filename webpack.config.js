const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader"
				],
			},
			{
				test: /\.(scss)$/,
				use: [{
					// inject CSS to page
					loader: 'style-loader'
				}, {
					// translates CSS into CommonJS modules
					loader: 'css-loader'
				}, {
					// Run postcss actions
					loader: 'postcss-loader',
					options: {
						// `postcssOptions` is needed for postcss 8.x;
						// if you use postcss 7.x skip the key
						postcssOptions: {
							// postcss plugins, can be exported to postcss.config.js
							plugins: function () {
								return [
									require('autoprefixer')
								];
							}
						}
					}
				}, {
					// compiles Sass to CSS
					loader: 'sass-loader'
				}]
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
		})
	],
};