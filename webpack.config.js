const path = require("path");
var OpenBrowserPlugin = require("open-browser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");

const config = (env, argv) => {
	console.log("argv", argv.mode);

	const backend_url = argv.mode === "production"
		? "https://rocky-retreat-76526.herokuapp.com/api"
		: "http://localhost:3003/api";

	return {
		entry: ["@babel/polyfill","./src/index.js"],
		output: {
			path: path.resolve(__dirname, "build"),
			filename: "main.js",
			publicPath: "/"
		},
		plugins: [new OpenBrowserPlugin({ url: "http://localhost:3000" }),new webpack.DefinePlugin({
			"process.env.REACT_APP_BACKEND_URL": JSON.stringify(backend_url)
		}),
		new HtmlWebpackPlugin({
			title: "Custom template",
			// Load a custom template (lodash by default see the FAQ for details)
			template: "./public/index.html"
		}),
		new CopyPlugin([
			{
				from: "public/favicon.ico",
				to: "favicon.ico",
				toType: "file",
			},
			{
				from: "public/manifest.json",
				to: "manifest.json",
				toType: "file"
			}
		])
		],
		devServer: {
			historyApiFallback: true,
			hot: true,
			contentBase: path.resolve(__dirname, "build"),
			compress: true,
			port: 3000
		},
		devtool: "source-map",
		module: {
			rules: [
				{
					test: /\.js$/,
					loader: "babel-loader",
					query: {
						presets: ["@babel/preset-env", "@babel/preset-react"],
						plugins: ["@babel/plugin-proposal-class-properties"]
					}
				},
				{
					test: /\.css$/,
					loaders: ["style-loader", "css-loader"]
				}
			]
		}
	};
};

module.exports = config;