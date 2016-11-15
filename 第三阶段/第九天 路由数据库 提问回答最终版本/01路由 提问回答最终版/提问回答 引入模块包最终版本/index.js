var express = require('express');
var fs = require('fs');
var cookieParser = require('cookie-parser');
//引入template模块
var template =  require("./template");
var app = express();
//指定一个静态目录
app.use(express.static('www'));
app.use(cookieParser());

//指定使用html视图引擎
app.engine(".html", template.__express);
app.set("view engine", 'html')

//引入路由 首页
app.use(require("./router/index.js"))
//引入路由 注册
app.use(require("./router/register.js"))
//引入路由 登录
app.use(require("./router/login.js"))
//引入路由 提出问题
app.use(require("./router/ask.js"))
//引入路由 回答问题
app.use(require("./router/answer.js"));
//引入路由 上传照片
app.use(require("./router/upload.js"))



app.listen(3000, function(req, res) {
	console.log('您好！服务器正常上线！')
})