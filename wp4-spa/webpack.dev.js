const merge = require('webpack-merge');
const base = require('./webpack.base');

module.exports = merge(base,{
  mode: 'development',

  devServer:{
    // contentBase: path.join(__dirname, 'dist'),//指定磁盘位置
    port: 8081,
    open: false
  }

})