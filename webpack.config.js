console.log(__dirname)
const path = require('path');//node系统模块
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const PurifycssWebpack = require('purifycss-webpack');
const glob = require('glob');
const rulesWebpack = require('./webpack.rules')
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    //入口
    entry:{
        aa:'./src/index.js',
        index2:'./src/index2.js',
        jquery:'jquery'
    },
    //出口配置
    output:{
        path:path.resolve(__dirname,'dist'),//path也是node提供的 而resolve可以理解成合并的字符串 整体打包的路径,要是一个绝对的地址 ，_dirname 表示当前路径node自带的
        filename:'[name].bundle.js'//[name] 表示路口名称
    },
    //module.rules loaders module 里面定义一些规则
    module:rulesWebpack,
    //插件 用于生产环境
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin(['dist']),//删除插件
        new HtmlWebPackPlugin({
            chunks:['aa','jquery'],
            filename:'index.html',
            template:'./src/index.html',
            title:'change',
            hash:true,
            // minify:{
            //     collapseWhitespace:true
            // }
        }),
        new ExtractTextPlugin('css/index.css'),//意思是讲css 文件 集中打包到dist中的css文件夹中的index.css
        new PurifycssWebpack({
            paths:glob.sync(path.join(__dirname,'src/*.html'))
        }),
        new CopyWebpackPlugin([{
            from:path.resolve(__dirname,'src/assets'),
            to:'./public'
        }]),//静态资源输出
        new webpack.ProvidePlugin({
            $:'jquery'
        })
    ],
    // devtool:'source-map',
    //开发服务器
    devServer:{
        //设置服务器访问的基本目录
        contentBase:path.resolve(__dirname,'dist'),
        //服务器ip地址 localhost
        host:'localhost',
        //设置端口
        port:'8080',
        open:true,
        hot:true
    },
    
    optimization:{
        splitChunks:{
            cacheGroups:{ // 单独提取JS文件引入html
                aaa:{ // 键值可以自定义
                    chunks:'initial', // 
                    name:'jquery', // 入口的entry的key
                    enforce:true   // 强制 
                }
            }
        }
    }


}