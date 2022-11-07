const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	mode: 'development',
	output: {
		path: path.join(__dirname, '/build'),
		filename: 'index_bundle.js',
	},
	target: 'web',
	devServer: {
		port: '5200',
		static: {
			directory: path.join(__dirname, 'public'),
		},
		open: true,
		hot: true,
		liveReload: true,
	},
	resolve: {
		extensions: ['.js', '.jsx', '.json'],
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: path.join(__dirname, 'public', 'index.html'),
		}),
	],
	module: {
		rules: [
			{
				test: /.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react'],
					},
				},
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader', 'postcss-loader'],
			},
			{
				test: /\\.(png|jp(e*)g|svg|gif|mp4)$/,
				use: ['file-loader'],
			},
			{
				test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg|mp4)(\?[a-z0-9=.]+)?$/,
				use: ['url-loader'],
			},
		],
	},
};
