let path = require('path');

let webpack = require('webpack')

const HtmlWebpackPlugin = require('html-webpack-plugin');

const ExtractTextWebapckPlugin = require("extract-text-webpack-plugin");

const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports={
  entry: './src/main.js',
  
  output: {
    path: path.resolve(__dirname, 'dist'),//出口路径必须磁盘路径
    publicPath:'/',//指定内存位置,公共路径
    filename: 'js/[name].js'
  },

  module: {

    rules: [
      
      { 
        test: /\.css$/, 
        use: ExtractTextWebapckPlugin.extract({
          use: 'css-loader'
        }) //不再需要style-loader 
      },

      { 
        test: /\.js$/, //检测所有.js文件
        exclude: /(node_modules|bower_components)/,//排除
        use: [
          {loader:'babel-loader',options:{presets:['@babel/preset-env']}}
        ] 
      },

      {
        test:/\.(png|jpg|gif)/,//支持图片base64 转换
        use:[{
          loader: 'url-loader',
          options: {
            limit: 5000,
            outputPath: 'images/', //参考output.path
          }
        }]
      },

      {
        test:/\.(json|eot|midi|mp3)/,
        use:[{
          loader: 'file-loader'
        }]
      }

    ]

  },

  devtool:'source-map', //开启生产环境 源码调试模式

  resolve:{
    extensions: ['.vue', '.css', '.js', '.json','.png'],//约定自动匹配的文件扩展名
    alias: { //约定模块别名 
      '@': path.resolve(__dirname, 'src/'),
      '~': path.resolve(__dirname)
    }
  },


  plugins:[
    new HtmlWebpackPlugin({
      template: './index.html',//参考页面
      filename: './index.html',//到output.path目录找生产环境资源|开发环境的publicPath
      hash:true,//防止缓存,会给文件后面加入hash
      minify:{
        collapseWhitespace: true,//消除空格
        removeComments: true,//删除注释
        removeRedundantAttributes: true,//删除无用属性
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true
      } 
    }),

    new ExtractTextWebapckPlugin('css/[name][hash:8].css'),

    new CopyWebpackPlugin([
      { from: path.resolve(__dirname,'static'), to: path.resolve(__dirname,'dist','static') }
    ]),

    new webpack.ProvidePlugin({
      // modB: './src/utils/mod/mod2/b.js',//指定路径
      modB: path.resolve(__dirname,'src','utils','mod','mod2/b.js'),
      $: 'jquery',//找系统路径 -》 node——modules
      // ...
    })

  ]





}