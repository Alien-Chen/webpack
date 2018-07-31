const ExtractTextPlugin = require('extract-text-webpack-plugin');
const rules ={
        rules:[
            {
                test:/\.css$/,
                // use:['style-loader','css-loader']
                use:ExtractTextPlugin.extract({
                    fallback:'style-loader',//fallback 回滚
                    use:['css-loader','postcss-loader'],
                    publicPath:'../'//配置css背景图的一个路径
                })
                // use:[
                //     {loader:'style-loader'},
                //     {loader:'css-loader'},
                //     {loader:'postcss-loader'}
                // ]
            },
            {
                test:/\.(png|jpg|gif)$/,
                use:[{
                    loader:'url-loader',
                    options:{
                        limit:80,
                        outputPath:'image'//将图片打包到dist 的image中
                        
                    }
                }]
            },
            {
                test:/\.less$/,
                // use:['style-loader','css-loader','less-loader']
                use:ExtractTextPlugin.extract({
                    fallback:'style-loader',//fallback 回滚
                    use:['css-loader','less-loader'],
                    publicPath:'../'
                })
            },
            {
                test:/\.(js|jsx)$/,
                use:['babel-loader'],
                exclude:/node_modules/ //不包含node_modules里面的文件
            },
            {
                test:/\.sass|scss$/,
                // use:['style-loader','css-loader','less-loader']
                use:ExtractTextPlugin.extract({
                    fallback:'style-loader',//fallback 回滚
                    use:['css-loader','sass-loader'],
                    publicPath:'../'
                })
            }
        ]
    }

module.exports = rules;