const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const PurifyCssWebpack = require('purifycss-webpack');
const glob = require('glob');
/*./为了区分用npm下载的模块和本地下载的模块*/
const rulesConfig = require('./webpack.rules.js');
const jsonConfig = require('./webpack.config.json');
/*const MiniCssExtractPlugin = require('mini-css-extract-plugin');*/

const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports={
	entry:{
		index: jsonConfig.entry,
		jquery:'jquery'
	},
	output:{
		path:path.resolve(__dirname , 'dist'),
		filename:'[name].bundle.js'
	},
	/*如果想使用css文件的话，配置module模块，并且这里面都是固定配置，名字不能改变*/
	/*创建单独的文件webpack.rules.js,存储rules文件，然后导出到这里就行了*/
	module:rulesConfig,
	/*如果在package.json中写的是mode production的话，就是压缩模式，就是将文件打包压缩*/
	devServer:{
		contentBase:path.resolve(__dirname , 'dist'),
		host:'localhost',
		port:8090,
		open:true,
		hot:true
	},
	plugins:[
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			title:'china',
			template:'./src/index.html'
		}),
		new ExtractTextPlugin('css/index.css'),
		/*new MiniCssExtractPlugin({
			filename:'css/index.css',
		})*/
		new PurifyCssWebpack({
			/*sync同步的方法
			join用来合并路径的,其实和resolve没啥区别
			*/
			/*作用：根据路径找模版，根据模版找哪些引用css，哪些没引用css，然后把没被引用的css的给删了*/
			paths:glob.sync(path.join(__dirname , 'src/*.html'))
		}),
		/*静态资源输出*/
		new CopyWebpackPlugin([{
			from:path.resolve(__dirname,'src/assets'),
			to:'./public'
		}]),
		new webpack.ProvidePlugin({
			$:'jquery'
		})
	],
	optimization:{
		splitChunks:{
				cacheGroups:{
					ventor:{
						chunks:'initial',
						name:'jquery',
						enforce:true
				}
			}
		}
	}
}