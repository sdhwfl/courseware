/**
 * Created by Administrator on 2016/11/8.
 */
//第一步,引入express模块
var express = require('express')

//第二步，创建一个express应用
var app = express();
//第三步,让用户访问首页首页的时候返回用户信息
// app.get('/', function (req, res) {
//     res.send("这是首页")
// })

//新的路由设置方式 引用index.js路由文件
var router=require('./routers/index');
//使用路由 在用户访问首页的时候
app.use('/',router);

//监听端口3000，启动服务器
app.listen(3001, function () {
    console.log('服务器正常启动');
})
