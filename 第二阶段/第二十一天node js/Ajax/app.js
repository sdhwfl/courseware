//引入express
var express = require('express');
//引入nodejs 文件系统模块
var fs = require('fs');
//首先在本项目目录下找node_modules目录、
//其次找express 目录 如果是文件就找文件名
//但是 如果说在本项目目录下找不到node_modules目录
//就会往父目录寻找 直到根目录为止

//生成一个express模块
var app = express();
//指定一个静态目录
app.use(express.static('www'));
//端口号

//接收get请求处理
//参数1：请求的地址
//如果上面制定静态目录 第一个找静态目录下的index.html 第二个去找app.get('/')
//其他请求发送请求 则会找对应的请求处理

//接收登陆提交
 app.get('/ajaxget', (req, res)=> {
	//ajaxget?sdh=宋典花&random=20
	//获取提交  请求体 
	var name = req.query.sdh;
	var age = req.query.random;
    //响应体
	res.status(200).send('你的名字是'+name+'你的年龄是'+age)
})



app.listen(3000, function(req, res) {
	console.log('服务器正常启动！')
})