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
		gallery: './src/gallery.js'
	},
	output: {
		path: path.resolve(__dirname,'dist'),
		filename: '[name].bundle.js'
	},
	module: {
		rules: [
			{test: /\.sass$|\.scss$|\.css$/, use: cssConfig},
			{ test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff&name=[name].[ext]&outputPath=fonts/' },
	        { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, use: 'file-loader?name=[name].[ext]&outputPath=fonts/' },
	        //image loaders
	        { test: /\.(jpe?g|png|gif|svg)$/i, loaders: [
            'file-loader?name=[name].[ext]&outputPath=images/',
            'image-webpack-loader'
        ]},
	        // {test: /\.ejs$/,
	        //       use: [{
	        //         loader: 'render-template-loader',
	        //         options: {
	        //           engine: 'ejs',
	        //           locals: {
	        //             title: 'Maharaja Academy',
	        //             home: 'Home',
	        //             gallery: 'Gallery'
	        //           },
	        //           engineOptions: function (info) {
	        //             // Ejs wants a filename for partials rendering.
	        //             // (Configuring a "views" option can also be done.)
	        //             return { filename: info.filename }
	        //           }
	        //         }
	        //       }]
	        // },
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
      		excludeChunks: ['aboutUs','gallery'],
		}),
		new HtmlWebpackPlugin({
      		template: 'ejs-simple-loader?title=MaharajaAcademy-AboutUs&activePage=about!./src/aboutUs.ejs',
      		filename: 'aboutUs.html',
      		minify: {
      			collapseWhitespace: true
      		},
      		excludeChunks: ['home','gallery'],
		}),
		new HtmlWebpackPlugin({
      		template: 'ejs-simple-loader?title=MaharajaAcademy-Gallery&activePage=gallery!./src/gallery.ejs',
      		filename: 'gallery.html',
      		minify: {
      			collapseWhitespace: true
      		},
      		excludeChunks: ['home','aboutUs'],
		}),

		new ExtractTextPlugin({
			filename: 'app.css',
			disable: !isProd,
			allChunks: true
		}),
		//hot Module Replacement
		new webpack.NamedModulesPlugin(),
	    new webpack.HotModuleReplacementPlugin()
	]
};