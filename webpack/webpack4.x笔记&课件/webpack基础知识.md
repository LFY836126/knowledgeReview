## webpack版本
 + webpack1.x
 + webpack2.x
 + webpack3.x
 + webpack4.x

官网: https://webpack.js.org/

---------------------------------
静态开发(H5+C3) gulp
vue\react  ->  webpack
DEMO  -> webpack 转
---------------------------------
## webpack是什么?
 + 打包(bundle)工具(模块打包器)
 + 前端工程师，必不可少工具
 + webpack4.x
## webpack作用:
 + 打包  (把多个文件打包成一个js文件， 减少服务器压力、带宽)
 + 转化  (比如less、sass、ts)   需要loader
 + 优化  (SPA越来越盛行，前端项目复杂度高， webpack可以对项目进行优化)
---------------------------------
## webpack构成:
 1. 入口   entry
 2. 出口   output
 3. loaders  转化器
 4. plugins  插件
 5. devServer 开发服务器
 6. mode  开发模式/生产模式 
------------------------------------------------------------------
先必须确保node环境已经安装
    nodejs.org  -> download -> 下一步
------------------------------------------------------------------
## 安装webpack:
 + npm install webpack-cli -g
 + npm install webpack@4.1.0 -g
    OR
 + yarn add webpack-cli -g
 + 验证webpack环境已经ok?
        webpack -v
## 卸载webpack:
    npm  uninstall  webpack  -g
------------------------------------------------------------------
## package.json  项目主要依赖配置文件

    npm init -y

------------------------------------------------------------------
## 开发环境: (development)
    就是你平时编写代码的环境

    npm i jquery --save-dev
    npm i jquery -D

## 生产环境: (production)
    项目开发完毕，部署上线
     
    npm i jquery --save
    npm i jquery -S
--------------------------------------------------------------------

```
npm i jquery
npm un jquery


npm i jquery --save-dev
npm i jquery --save

npm i jquery --save-dev jquery
```

--------------------------------------------------------------------
安装多个 中间用空格分割：
npm i jquery loadsh aaa bbb ccc -D

--------------------------------------------------------------------
npm如何配置:
    npm install -g npm --registry=https://registry.npm.taobao.org

--------------------------------------------------------------------
##跑一跑webpack:
 1. 创建webpack-demo文件夹
 2. webpack-demo下
  + 创建src，然后src下创建index.js（将被打包为bundle.js）
  + 创建dist，dist下创建index.html（html中引入bundle.js文件）
 3. 终端里运行:
        webpack src\index.js --output dist/bundle.js
--------------------------------------------------------------------
## webpack.config.js    webpack配置文件

```
预览:
        module.exports={
            //入口配置
            entry:{},
            //出口配置
            output:{},
            //module.rules
            //loaders
            module:{},
            //插件
            plugins:[],
            //开发服务器
            devServer:{}
        };
```


```
例：
const path = require('path'); //node系统模块
module.exports={
    //入口配置
    entry:{
        a:'./src/index.js'
    },
    //出口配置
    output:{
            //path.resolve就是一个拼接路径的方法，__dirname指当前文件路径
        path:path.resolve(__dirname,'dist'), //path必须是绝对路径,指输出文件目录
            //filename输出文件名
        filename:'bundle.js'
    }
};
```

--------------------------------------------------------------------
##注意：
配置文件名字一定得叫 webpack.config.js  答: 不是

如果改名叫:  mmr.config.js
运行时候:
1.
```
终端运行
    webpack --config mmr.config.js
```
2. 
```
更改package.json中build为"webpack --config mmr.config.js"，然后终端运行npm run build

package.json:
        "scripts": {
                "build": "webpack --config mmr.config.js",
            "dev":"xxx",
            "aaa":"xxx"
          }
npm run build
```
parcel   零配置
--------------------------------------------------------------------
webpack4.x 实现所谓的0配置

--------------------------------------------------------------------
mode:

    webpack --mode development
        
    webpack --mode production 
        明显文件被压缩

--------------------------------------------------------------------

##多入口(多文件)打包一起:
```
    const path = require('path');
    module.exports = {
        entry:['./src/index.js','./src/index2.js'],  //按照顺一起打包 bundle.js
        output:{
            path:path.resolve(__dirname, 'dist'),
            filename:'bundle.js'
        }
    };
```
##多入口多出口配置:
```
    const path = require('path');
    module.exports = {
        entry:{
            index:'./src/index.js',
            index2:'./src/index2.js'
        },
        output:{
            path:path.resolve(__dirname, 'dist'),
            //输出为两个文件，分别是index.bundle.js和index2.bundle.js,这就是[name]的作用,但是最后dist中index.html文件中引入文件名也要手动更改为index.bundle.js和index2.bundle.js
            filename:'[name].bundle.js'
        }
    };
```

## html-webpack-plugin:

手册：https://www.npmjs.com/package/html-webpack-plugin#
###安装注意

安装完之后直接就可以生成dist文件目录，也就是
只有有src,package.json就能生成过dist文件夹并且包含js文件和html文件

 1. 依赖webpack、webpack-cli
 2. 下载：npm i webpack webpack-cli -D 
###生成页面
1. 安装
```
        npm i html-webpack-plugin -D
```
2. 引入
```
        const HtmlWebpackPlugin = require('html-webpack-plugin');
```
3. 使用
```
        plugins:[
            new HtmlWebpackPlugin()
        ]
```
    例：
```
        const path = require('path');
        const HtmlWebpackPlugin = require('html-webpack-plugin');
        module.exports={
            entry:
            {
                index:'./src/index.js',
                index2:'./src/index2.js'
            },
            output:{
                path:path.resolve(__dirname,'dist'),
                filename:'[name].bundle.js'
            },
            plugins:[
                new HtmlWebpackPlugin(),
            ]
        }
```
4. 模板:
```
            new HtmlWebpackPlugin({
                template:'模板地址'
            })
```
5. 页面标题:
```
            new HtmlWebpackPlugin({
                //一定记得在模板中使用:也就是模板中是这样的<title><%= htmlWebpackPlugin.options.title%></title>
                title:'xxxxx',
                template:'模板地址'
            })
```
6. 生成连接消除缓存
```
            new HtmlWebpackPlugin({
                hash:true,
                title:'xxxxx',
                template:'模板地址'
            })
```
7. 压缩输出:
```
            new HtmlWebpackPlugin({
                minify:{
                    collapseWhitespace:true,  //压缩空白
                    removeAttributeQuotes:true //删除属性双引号
                },
                hash:true,
                //一定记得在模板中使用:也就是src/index.html中<title>是这样的:<title><%= htmlWebpackPlugin.options.title%></title>
                title:'I Love China',
                template:'./src/index.html'
            })
```

8. 生成多个页面:
```
            filename:'xxx'
```
9. 多页面分别引入自己的js:
```
            chunks:['index']
```
```
例：
plugins:[
        new HtmlWebpackPlugin({
            chunks:['index'],
            filename:'index4.html',
            title:'ifhdksah',
            template:'./src/index.html',
        }),
        new HtmlWebpackPlugin({
            chunks:['index2'],
            filename:'index3.html',
            title:'ifhdksah',
            template:'./src/index.html',
        }),
    ]
```
    https://www.npmjs.com/package/html-webpack-plugin#

##以上使用综合例：
```
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports={
    /*入口配置*/
    entry:{
        /*a：名字随意起*/
        index: './src/index.js',
        index2: './src/index2.js'
    },
    /*出口配置*/
    output:{
        /*path整体打包路径,必须是绝对路径，
        __dirname代表当前webpack.config.js所在目录，是绝对路径*/
        path:path.resolve(__dirname , 'dist'),
        /*filename名字固定，可以生成两个js文件，这个name是入口文件entry的key值*/
        filename:'[name].bundle.js'
    },
    /*能自动生成dist目录（index.bundle.js,index2.bundle.js等）*/
    plugins:[
        
        new HtmlWebpackPlugin({ 
            /*压缩输出*/
            // minify:{
            //  collapseWhitespace:true/*折叠空白区域*/

            // },
            /*生成链接消除缓存，每个生成的文件名都不一样,类似于这样："index.bundle.js?3e368073ad67e336b700"*/
            // hash:'true',
            /*引入js文件*/
            chunks:['index'],
            /*生成html文件的名字*/
            filename:'index.html',
            /*可以编辑生成的index文件的标题*/
            title:'i an',
            /*模板地址*/
            template:'./src/index.html'
        }),
        new HtmlWebpackPlugin({
            // 引入js文件
            chunks:['index2'],
            /*生成html页面的名字*/
            filename:' index2.html',
            /*可以编辑生成的index文件的标题*/
            title:'第二个页面',
            /*模板地址*/
            template:'./src/index2.html'
        })
    ]
};
结果：可以在生成dist目录，目录中有两个js文件和两个html文件，一个为index.html和index2.html文件，分别引用js文件
```

##clean-webpack-plugin:   删除某些东西(清除)
    1. 下载
        npm i clean-webpack-plugin -D
    2. 引入
        const CleanWebpackPlugin = require('clean-webpack-plugin');
    3. 使用:
        new CleanWebpackPlugin(['dist'])
--------------------------------------------------------------------

##devServer:
官方文档：
https://webpack.js.org/configuration/dev-server/

    1. 下载（如果出错可以一直下载，就是建议把node_modules也删了重新下载）
        npm i webpack-dev-server -D
    2. 使用
        devServer:{
                //设置服务器访问的基本目录
                contentBase:path.resolve(__dirname, 'dist'),
                //服务器ip地址， localhost
                host:'localhost',
                //设置端口
                port:8090
            }

    3. 此时
        package.json:
            "scripts": {
                "build": "webpack --mode development",
                "dev":"webpack-dev-server --mode development"
            }
        注意这个package

    4. 想自动打开浏览器:
        open:true

    5. 热更新:
        hot:true

            //放在文件头部，引入插件
        const webpack = require('webpack');
            //开启
        hot:true
            //在plugins中配置
        new webpack.HotModuleReplacementPlugin()

##以上综合例：
```
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
module.exports={
    /*入口配置*/
    entry:{
        /*a：名字随意起*/
        index: './src/index.js',
        index2: './src/index2.js'
    },
    /*出口配置*/
    output:{
        /*path整体打包路径,必须是绝对路径，
        __dirname代表当前webpack.config.js所在目录，是绝对路径*/
        path:path.resolve(__dirname , 'dist'),
        /*filename名字固定，可以生成两个js文件，这个name是入口文件entry的key值*/
        filename:'[name].bundle.js'
    },
    devServer:{
        /*设置服务器访问的基本目录*/
        contentBase:path.resolve(__dirname , 'dist'),
        host:'localhost',
        port:8090,
        open:true,/*自动打开页面*/
        hot:true
    },
    /*能自动生成dist目录（index.bundle.js,index2.bundle.js等）*/
    plugins:[
        /*清除dist文件夹*/
        /*new CleanWebpackPlugin(['dist']),*/
        /*配置热更新，先const引入webpack，然后在plugins中配置一下，然后在dexServer中将hot打开
        */
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            // 引入js文件
            chunks:['index'],
            /*生成html页面的名字*/
            filename:' index.html',
            /*可以编辑生成的index文件的标题*/
            title:'china',
            /*模板地址*/
            template:'./src/index.html'
        })
    ]
};
结果：
1.npm run bulid:可以在生成dist目录，目录中有一个html文件，两个js文件，并且html文件引用两个js文件
2.npm run dev:浏览器自动打开dist中生成index.html文件，并且开启热更新（这个热更新暂时没什么实质性的表示）
```

##loaders:  在webpack里面是一个很重要功能
    加载器、转化器
    比如: less/scss 转成css
            ES7 8
            jsx

##处理css文件:
```
在引入css文件时注意：
1.index.js引入src下的css文件夹中a.css文件
  index.js:
    import './css/a.css'
2.不在文件头部引入（图片引入同理）：也就是没有什么const ... = require(...)这样的语句
```

    插件：
        style-loader
        css-loader
    安装：npm i style-loader css-loader -D
    配置:
        module:{
            rules:[
                {
                    //test匹配规则，以.css后缀名结尾的文件
                    test:/\.css$/,
                    use:['style-loader','css-loader']
                }
            ]
        }
    注意:关于loader写法
        1. use:['xxx-loader','xxx-loader']
        2. loader:['xxx-loader','xxx-loader']
        3. use:[
                        {loader:'style-loader'},
                        {loader:'css-loader'}
                    ]

##打包完以后肯定需要压缩上线:
    如何压缩:
    1. webpack4.x：--mode production
        由package.json:
            "scripts": {
                "build": "webpack --mode development",
                "dev":"webpack-dev-server --mode development"
            }
        变为package.json:
        "scripts": {
            "build": "webpack --mode production",
            "dev":"webpack-dev-server --mode production"
        }
    2. 之前版本
        uglifyjs-webpack-plugin
        1. 下载插件：npm i uglifyjs-webpack-plugin -D
        2. 文件头部引入：const uglify = require('xxx);
        3. 在plugin中配置：new ugliufy()

##图片: (png,jpg,gif)

    插件：url-loader  file-loader
    安装：npm i file-loader url-loader -D
    配置：
        {
                    test:/\.(png|jpg|gif)$/,
                    use:[{
                        loader:'url-loader',
                        options:{
                              limit:50,
                              outputPath:'images'
                        }
                    }]
                }
注意:此时文件

    index.js文件中内容为：
        import './css/a.css';
        import imgSrc from './images/大白.jpg';
        let o = new Image();
        o.onload = function(){
        document.appendChild(o);
        }
        o.src= imgSrc;
    a.css文件中内容为：
        body{
            background:url('../images/大白.jpg') right top repeat-y;
        }
    webpack.config.js文件中module内容为：
        module:{
            rules:[
                {
                    //test匹配规则，以.css后缀名结尾的文件
                    test:/\.css$/,
                    use:['style-loader','css-loader'],
                },
                {
                    test:/\.(png|jpg|gif)$/,
                    use:[{
                        loader:'url-loader',
                        options:{
                              limit:50,
                              outputPath:'images'//所有图片打包在一个images的文件夹
                        }
                    }]
                }
               ]
        },

##分离:  css
    插件：extract-text-webpack-plugin
    安装：
        npm i extract-text-webpack-plugin -D        webpack3.x
        npm i extract-text-webpack-plugin@next -D  webpack4.x
    应用：
    1.文件头部：
        const ExtractTextPlugin = require('extract-text-webpack-plugin');
    2.然后在plugins里面设置：
           //new ExtractTextPlugin(文件打包路径)
        new ExtractTextPlugin('css/index.css')
    3.然后再在module中应用：
           //所有css文件打包在一个css文件夹
        use:ExtractTextPlugin.extract({
            fallback:'style-loader',
            use:'css-loader',
            publicPath:'../' //解决css背景图，路径问题
        })
##mini-css-extract-plugin:   

    截止到目前为止(2018-3-23)，对背景图路径配置
    API文档
    下载：npm i mini-css-extract-plugin -D
    引入：在文件的最开头引入
    使用：pulgins中配置如下
    new MiniCssExtractPlugin({
        filename:'css/index.css'
    })
    在module中css部分配置如下：
    use[
       MiniCssEctractPlugin.loader,'css-loader'
    ]

##综合知识点例：loaders ,css,图片,分离css, mini-css-extract-plugin
```
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
/*const MiniCssExtractPlugin = require('mini-css-extract-plugin');*/
module.exports={
    entry:{
        index: './src/index.js',
    },
    output:{
        path:path.resolve(__dirname , 'dist'),
        filename:'[name].bundle.js'
    },
    /*如果想使用css文件的话，配置module模块，并且这里面都是固定配置，名字不能改变*/
    module:{
        rules:[
            {
                /*加载css，将css文件提取*/
                test:/\.css$/,
                use:['style-loader' , 'css-loader'],
                /*上面的语句等价于：
                loader:['style-loader' , 'css-loader']
                    也等价于：
                use:[
                //必须先写style-loader然后写css-loader
                    {loader:'style-loader'},
                    {loader:'css-loader'}
                ]*/
                use:ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:'css-loader',
                    // 配css里面背景图的路径
                    publicPath:'../'
                })
                /*use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]*/
            },
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
            }
        ] 
    },
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
    ]
};
```

##less(参见css，和css一样的):
    1. npm i less less-loader -D
    2.在index.js中import引入a.less文件
    3.module下rules
    {
        test:/\.less$/,
        use:['style-loader','css-loader','less-loader']
    }
less文件夹下a.less文件：

    @a:red;
    #less-id{
    color: @a;
    ul{
        li{
            list-style:none;
            height:30px;
            line-height:30px;
        }
     }
    }
index.html:

    <div id="less-id"></div>
index.js:

    import './less/a.less';
webpack.config.js

    module下rules
    {
        test:/\.less$/,
        use:['style-loader','css-loader','less-loader']
    }


##分离less:（把less也扔到index.css中）
    module下rules：
    {
        test:/\.less$/,
        //use:['style-loader','css-loader','less-loader']
        use:ExtractTextPlugin.extract({
            fallback:'style-loader',
            use:['css-loader','less-loader']
        })
    }
    除了：module下rules外，其他文件内容都和那个less一样
--------------------------------------------------------------------
##sass:（同less一样一样的）
    安装插件：
    npm i node-sass sass-loader -D
    配置:
    {
        test:/\.(sass|scss)$/,
        use:['style-loader','css-loader','sass-loader']
    }

## 提取sass:
    {
        test:/\.(sass|scss)$/,
        use:ExtractTextPlugin.extract({
            fallback:'style-loader',
            use:['css-loader','sass-loader']
        })
    }
--------------------------------------------------------------------        
transform:

-webkit-transform:

##自动处理前缀:
    postCss 预处理器
    专门处理css平台

```
1. 安装插件：npm i postcss-loader autoprefixer -D

2. 准备 postcss.config.js文件   配置postCss
    module.exports ={
        plugins:[
            require('autoprefixer')
        ]
    };
3. 配置loader
    module下rules：
    {
        use:[
                {loader:'style-loader'},
                {loader:'css-loader'},
                {loader:'postcss-loader'}
            ]
    }
4. 提取出来
    module下rules：
    {
        use:ExtractTextPlugin.extract({
            fallback:'style-loader',
            use:['css-loader','postcss-loader'],
            publicPath:'../' //解决css背景图，路径问题
        })
    }
```

##消除冗余css代码:
    Purifycss

    1. 下载npm i purifycss-webpack purify-css -D
    2. 引入插件
        const PurifyCssWebpack = rewquire('purifycss-webpack');
    3. 需要引入一个额外包glob
        下载：npm i glob -D
        引入：const glob = require('glob');
    4. 在plugins里面配置
        new PurifyCssWebpack({
            //*.html匹配所有html文件，将用到的css保留，不用的清除(例如:没有用到的样式，选择器什么的)，
            paths:glob.sync(path.join(__dirname, 'src/*.html'))
        })

##调试:
    webpack4.x 开启调试:
        --mode development
    webpack3.x之前:
        sourceMap
         //这个devtool是放在与plugins或者module平级的位置上，也就是：
        module:{...},
        devtool:'source-map',
        plugins:{...}

##babel:
1. webpack已经实现了支持esnext所有语法
```
    - babel用来编译js
    - 让你很轻松的使用 ESnext,转化
    - jsx
```
2. 如果碰到不支持的
```
    1.那就先下载插件，然后在module中的rules中配置如下选项(这里配置的只是一个预设，得把它装在.babelrc文件中才能成功)
    2.然后再新建一个.babelrc文件，具体配置如下：

        1.插件：babel-core  bable-loader   babel-preset-env
        2.插件下载：
            npm i babel-loader babel-core babel-preset-env -D
        3.配置：module下rules：
                {
                    test:/\.(js|jsx)$/,
                    use:['babel-loader'],
                     //检索的位置不包含node_modules
                    exclude:/node_modules/
                }
        4. .babelrc文件配置：放在src同级目录
            {
              "presets":{
                  "env"
                }
            }
            ESnext所有语法

```

创建js文件夹，再创建a.js文件
a.js文件中内容为:
```
    export const a = 12,
    export const a = 5
```
index.js文件中内容为：
```
    import {a, b} from './js/a.js';
```
module下rules：
```
    {
        test:/\.(js|jsx)$/,
        use:['babel-loader'],
         //检索的位置不包含node_modules
        exclude:/node_modules/
    }
```
##如果是jsx文件
    jsx:
    npm i babel-preset-react -D
    npm i react react-dom -D
    就是需要配置react等等插件
---------------------------------------------
##在webpack中用模块化:
    和node一模一样

    导出:（新建文件存储模块，例如webpack.rules.js,然后最后把存储数据的变量利用下面一行语句导出）
        module.exports = xxx
    引入:（在webpack.config.js文件头用下面语句导入，记得一定要加./   代表本地文件）
        require('./xxxxx');

```
例：
webpacl.rules.js文件中内容为：
        //注意插件引入
    const ExtractTextPlugin = require('extract-text-webpack-plugin');
    const rules = {
        rules:[
                {w
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
webpack.config.js文件中内容为：
        //1.引入文件
    const rulesConfig = require('./webpack.rules.js');
        //使用
    entry:{...},
    module:rulesConfig,
    plugins:[...],
```
##在webpack中使用json:

```
之前插件：json-loader
但是到webpack.3x版本之后不用，json可以默认就识别
    1.先创建json文件，
    webpack.config.json文件内容为：
        {
            "entry":"./src/index.js"
        }
    2.在webpack.config.js文件头部导入利用如下语句
        记住，不可用import，webpack不支持，但是在src下的index.js也就是入口文件这里可以用，因为这个index.js文件可以利用webpack.config.js文件中的babel模块包装，
    3.所需文件：
    (1)webpack.config.js文件内容为：
            //头部引入文件：
        const jsonConfig = require('./webpack.config.json');
            //使用：
        module.exports={
            {...},
            entry:{
                index: jsonConfig.entry,
                jquery:'jquery'
            },
            {...}
        }
    (2)webpack.config.json文件内容为：
        {
            "entry":"./src/index.js"
        }
```

##静态资源输出:
    copy-webpack-plugin
    1. 下载
        npm i copy-webpack-plugin -D
    2. 引入
        const CopyWebpackPlugin = require('copy-webpack-plugin');
    3. 使用
        plugins:[
            new CopyWebpackPlugin([{
                from:path.resolve(__dirname, 'src/assets'),
                to:'./public'
            }])
        ]
---------------------------------------------   
##补充：
官网->插件什么的：
https://webpack.js.org/plugins/copy-webpack-plugin/

都在npm上:
www.npmjs.com
github  issues
---------------------------------------------
##使用第三库:
    1. 直接npm下载，然后在index.js也就是入口文件处引入（完全可以使用，但是我个人不是很推荐）
        (1)安装：npm i jquery -S
        (2) src下的index.js 文件处使用：
                import $ from 'jquery';
                $('#box').css({
                 width:'100px',
                 height:'100px',
                 background-color:'red'
                })
            src下的index.html文件内使用：<div id="box"></div>
    2. ProvidePlugin    (个人推荐此方式)
        这个插件是webpack自带的插件，不需要下载，只需要保证webpack在就行
        使用：
            //引入插件
        const webpack = require('webpack');
            //在plugins里面使用:
        new webpack.ProvidePlugin({
            $:'jquery',
            lodash:'lodash'
            ....
        })
    3. 通过ProvidePlugin和 import直接引入区别:
        (1). import $...，引入之后，无论你在代码中是否使用jquery，打包后，都会打进去，这样其实产生大量的冗余js
        (2). Provideplugin, 只有你在使用到此库，才会打包

##提取第三方(自己感觉想提取)js库:
    之前webpack3.x版本之前:
        在plugins里面配置：
        new webpack.optimize.CommonsChunkPlugin({
            name:'jquery'
        })
    到了webpack4.x版本:
        用到：optimization.splitChunks
        webpack.config.js文件中配置：
            module.exports = {
                entry:{
                    index: jsonConfig.entry,
                    jquery:'jquery'
                },
                optimization:{
                    splitChunks:{
                        cacheGroups:{
                            vendor:{
                                chunks:'initial',
                                name:'jquery',
                                enforce:true
                            }
                        }
                    }
                },
                plugins:[...],
                ...
            }
            ----------------------------------------------
            optimization:{
                splitChunks:{
                    cacheGroups:{
                        aaa:{
                            chunks:'initial',
                            name:'jquery',//和入口entry中key名一样，最后生成jquery.bundle.js文件
                            enforce:true
                        },
                        /*如果再要生成一个文件，就entry入口key值和这个name值要对应*/
                        bbb:{
                            chunks:'initial',
                            name:'入口名称',
                            enforce:true
                        }
                    }
                }
        
##webpack-demo文件夹中(具体查看webpack-demo文件夹)
webpack.config.js文件：
```
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
```
webpack.rules.js文件：
```
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
                test:/\.sass$/,
                use:['style-loader','css-loader' ,'sass-loader']
            }*/
        ] 
};
module.exports = rules;
```
##补充：
npm ...... -D  安装在当前文件夹中的node_modules文件夹中
npm ...... -S  安装在c盘下用户下83612下的node_modules

##vue插件
    1.安装：npm i vue -D
    2.使用：
        第一种方式：
         (1)main.js(index.js)文件夹中：
            import Vue from '../node_modules/vue/dist/vue.js'    
            var vm = new Vue({
                el: '#app',
                data: {
                msg: '123'
                }
            }),
         (2)index.html文件夹中：
            <div id="app">{{msg}}</div>
        第二种方式：
         (1)main.js(index.js)文件中配置：
            import Vue from 'vue';
         (2)webpack.config.js中配置:
            module.exports = {
                entry:{...},
                plugins:[...],
                resolve: {
                    alias: { // 修改 Vue 被导入时候的包的路径
                      // "vue$": "vue/dist/vue.js"
                    }
                }
            }
##vue组件插件

```
安装插件：npm i vue-loader vue-template-compiler -D
使用：
第一种方式： index.js中配置更改默认加载文件为vue.js不是那个什么runtime什么.js那个文件
    import Vue from '../node_modules/vue/dist/vue.js' 
    var login = {
       template: '<h1>这是login组件，是使用网页中形式创建出来的组件</h1>'
    }
    var vm = new Vue({
        el: '#app',
        data: {
          msg: '123'
        },
        components: {
          login
        }
      render: c => c(login)
    })   
第二种方式：
    1.webpack.config.js文件
        //(1)头部引入：
            const VueLoaderPlugin = require('vue-loader/lib/plugin');
            entry:{...},
        //(2)module下rules配置loader
            module:{
                rules:[
                { test: /\.vue$/, use: 'vue-loader' },
                ]
            },
        //(3)plugins中配置
            plugins:[
                new VueLoaderPlugin(),
            ],
    2.src下创建login.vue文件：
        <template>
            <div>
                小仙女
            </div>
        </template>
    3.入口文件index.js文件：
        import Vue from '../node_modules/vue/dist/vue.js'   
        import login from './login.vue'
        var vm = new Vue({
            el: "#app",
            data:{
                msg : 'a',
            },
            <!-- render:function(c){
                return c(login)
            } -->
            render:c=>c(login),
        })
```



