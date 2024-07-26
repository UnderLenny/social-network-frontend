require('dotenv').config()
const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const production = process.env.NODE_ENV === 'production'

module.exports = {
	entry: './src/main.tsx',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: production ? '[name].[contenthash].js' : '[name].js',
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							'@babel/preset-env',
							'@babel/preset-react',
							'@babel/preset-typescript',
						],
					},
				},
			},
			{
				test: /\.s(a|c)ss$/,
				exclude: /node_modules/,
				use: [
					production ? MiniCssExtractPlugin.loader : 'style-loader',
					{
						loader: 'css-loader',
						options: {
							modules: true,
							sourceMap: !production,
						},
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: !production,
						},
					},
				],
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js', 'scss'],
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
		static: path.join(__dirname, 'dist'),
		hot: true,
		compress: true,
		port: 9000,
	},
	mode: production ? 'production' : 'development',
}
