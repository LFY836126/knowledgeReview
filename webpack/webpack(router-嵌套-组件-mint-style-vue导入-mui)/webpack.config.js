const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports={
    entry:
    {
        index:'./src/index.js',
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].bundle.js'
    },
    devServer:{
        /*设置服务器访问的基本目录*/
        contentBase:path.resolve(__dirname , 'dist'),
        host:'localhost',
        port:8090,
        open:true,/*自动打开页面*/
    },
    module:{
        rules:[
            {
                test:/\.vue$/,
                use:['vue-loader']
            },
            {
                test: /\.css$/,
                use: ["vue-style-loader", "css-loader"]  
            },
            {
                    test:/\.(js|jsx)$/,
                    use:['babel-loader'],
                     //检索的位置不包含node_modules
                    exclude:/node_modules/
            },
            {       test: /\.(ttf|eot|svg|woff|woff2)$/, 
                    use: ['url-loader']
            },
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'china',
            template:'./src/index.html'
        }),
        new VueLoaderPlugin(),
    ],
    resolve:{
        alias:{
            /*'vue$':'vue/dist/vue.js'*/
        }
    }
}