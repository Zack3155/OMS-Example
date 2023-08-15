import * as path from "path";
import * as webpack from "webpack";

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config: webpack.Configuration = {
	mode: process.env.NODE_ENV == "development" ? "development" : "production",
	entry: {
		index: "./src/index.tsx",
	},
	module: {
		rules: [
			// ts和tsx文件处理器
			{
				test: /\.(ts|js)x?$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
			// .css文件预处理器
			{
				test: /\.(scss|css)$/,
				use: [MiniCssExtractPlugin.loader, "css-loader"],
			},
			//处理图片
			{
				test: /\.(png|jpe?g|gif|eot|ttf|woff|woff2|mp4)$/i,
				type: "asset/resource",
			},
			{
				test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
				type: "asset/resource",
			},
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js", ".jsx"],
		alias: {
			src: path.resolve(__dirname, "./src"),
		},
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "otter-oms.[name].[contenthash].js",
		publicPath: "/",
		assetModuleFilename: (pathData) => {
			const filepath = path
				.dirname(pathData.filename)
				.split("/")
				.slice(1)
				.join("/");
			return `${filepath}/[name].[hash][ext][query]`;
		},
		clean: true,
	},
	performance: {
		maxEntrypointSize: 512000,
		maxAssetSize: 512000,
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "assets/css/[name].[contenthash].css",
			chunkFilename: "assets/css/[name].[contenthash].css",
			ignoreOrder: true,
		}),
		new HtmlWebpackPlugin({
			inject: "body",
			template: "./public/index.html", // 模版，需要一个现有的html文件作为模版
			filename: "index.html", // 生成的新的html的文件名,
			favicon: "./public/favicon.ico",
		}),
		require("tailwindcss"),
		require("autoprefixer")
	],
};

export default config;
