const ExtractTextPlugin = require('extract-text-webpack-plugin');
const rules = {
	rules:[
			{
				/*加载css，将css文件提取*/
				test:/\.css$/,
			 	/*use:['style-loader' , 'css-loader'],*/
				/*上面的语句等价于：
				loader:['style-loader' , 'css-loader']
					也等价于：
				*/
				/*use:[
				//必须先写style-loader然后写css-loader
					{loader:'style-loader'},
					{loader:'css-loader'},
					{loader:'postcss-loader'}
				]*/

				/*提取分离css*/
				use:ExtractTextPlugin.extract({
					fallback:'style-loader',
					use:['css-loader','postcss-loader'],
					// 配css里面背景图的路径
					publicPath:'../'
				})
				/*use:[
					MiniCssExtractPlugin.loader,
					'css-loader'
				]*/
			},
			/*配置bebel，为了支持esnext语法，不过webpack现在已经都支持了，但是要知道是这么配的*/
			/*{
				test:/\.(js|jsx)$/,
				use:['babel-loader'],
				exclude:/node_modules/
			},*/
			{
				/*将图片打包，并且放在images文件夹中*/
				test:/\.(png|jpg|gif)$/,
				use:{
					loader:'url-loader',
					/*当图片大小超过limit值时，图片就转为路径形式，而不是base64,base64特点与路径无关，*/
					options:{
						limit : 50,
						outputPath:'images'
					}
				}
			},
			{
				test:/\.less/,
				/*顺序：先是less-loader修饰，然后css-loader加载，然后再扔到style-loader，也就是use里面的顺序是从右往左的*/
				/*use:['style-loader' , 'css-loader' , 'less-loader']*/
				use:ExtractTextPlugin.extract({
					fallback:'style-loader',
					use:['css-loader' , 'less-loader']
				})
			}/*,
			{
				test:/\.sass$/;
				use:['style-loader','css-loader' ,'sass-loader']
			}*/
		] 
};
module.exports = rules;