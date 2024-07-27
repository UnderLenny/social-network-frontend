const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const production = process.env.NODE_ENV === 'production'

module.exports = {
	entry: './src/main.tsx',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: production ? '[name].[contenthash].js' : '[name].js',
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss'],
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				use: 'ts-loader',
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: 'babel-loader',
			},
			{
				test: /\.s(a|c)ss$/,
				exclude: /node_modules/,
				use: [
					production ? MiniCssExtractPlugin.loader : 'style-loader',
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
							modules: {
								auto: /\.module\.\w+$/i, // Включить CSS модули для файлов с .module. в имени
								localIdentName: production
									? '[hash:base64]'
									: '[path][name]__[local]',
							},
							sourceMap: !production,
						},
					},
					'postcss-loader',
					{
						loader: 'sass-loader',
						options: {
							sourceMap: !production,
						},
					},
				],
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[hash].[ext]',
							outputPath: 'assets',
							publicPath: 'assets',
						},
					},
				],
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: './index.html',
		}),
		new MiniCssExtractPlugin({
			filename: production ? '[name].[contenthash].css' : '[name].css',
		}),
	],
	devServer: {
		static: {
			directory: path.join(__dirname, 'dist'),
		},
		compress: true,
		port: 3001,
	},
	mode: production ? 'production' : 'development',
}
