const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const path = require('path');
const webpack = require('webpack');
var isProd = process.env.NODE_ENV == 'production';

var cssDev = ['style-loader','css-loader','sass-loader'];
var cssProd = ExtractTextPlugin.extract({
	fallback: 'style-loader',
	use: ['css-loader','sass-loader']
});

var cssConfig = isProd ? cssProd : cssDev;
module.exports = {
	entry: {
		app: './src/app.js',
		home: './src/home.js',
		aboutUs: './src/aboutUs.js',
		gallery: './src/gallery.js',
		displayBoard: './src/displayBoard.js'
	},
	output: {
		path: path.resolve(__dirname,'dist'),
		filename: '[name].[hash].bundle.js'
	},
	module: {
		rules: [
			{test: /\.sass$|\.scss$|\.css$/, use: cssConfig},
			{ test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=1000000&mimetype=application/font-woff&name=[name].[hash].[ext]&outputPath=fonts/' },
	        { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, use: 'file-loader?name=[name].[hash].[ext]&outputPath=fonts/' },
	        //image loaders
	        { test: /\.(jpe?g|png|gif|svg)$/i, loaders: [
            'file-loader?name=[name].[hash].[ext]&outputPath=images/',
            'image-webpack-loader'
        ]},
		]
	},
	devServer: {
		contentBase: path.join(__dirname, "dist"),
  		compress: true,
  		stats: 'errors-only',
  		hot: true
	},
	plugins: [
		new HtmlWebpackPlugin({
      		template: 'ejs-simple-loader?title=MaharajaAcademy-Home&activePage=home!./src/index.ejs',
      		filename: 'index.html',
      		minify: {
      			collapseWhitespace: true
      		},
      		chunks: ['app','home'],
		}),
		new HtmlWebpackPlugin({
      		template: 'ejs-simple-loader?title=MaharajaAcademy-AboutUs&activePage=about!./src/aboutUs.ejs',
      		filename: 'aboutUs.html',
      		minify: {
      			collapseWhitespace: true
      		},
      		chunks: ['app','aboutUs'],
		}),
		new HtmlWebpackPlugin({
      		template: 'ejs-simple-loader?title=MaharajaAcademy-Gallery&activePage=gallery!./src/gallery.ejs',
      		filename: 'gallery.html',
      		minify: {
      			collapseWhitespace: true
      		},
      		chunks: ['app','gallery'],
		}),
		new HtmlWebpackPlugin({
      		template: 'ejs-simple-loader?title=MaharajaAcademy-DisplayBoard Get Anoouncements,Study Material,Tips&activePage=displayBoard!./src/displayBoard.ejs',
      		filename: 'displayBoard.html',
      		minify: {
      			collapseWhitespace: true
      		},
      		chunks: ['app','displayBoard'],
		}),
		new ExtractTextPlugin({
			filename: 'app.[hash].css',
			disable: !isProd,
			allChunks: true,
		}),
		//hot Module Replacement
		new webpack.NamedModulesPlugin(),
	    new webpack.HotModuleReplacementPlugin()
	]
};