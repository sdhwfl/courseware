//引入express
var express = require('express');
//引入nodejs 文件系统模块
var fs = require('fs');
var bodyParser=require('body-parser');
//首先在本项目目录下找node_modules目录、
//其次找express 目录 如果是文件就找文件名
//但是 如果说在本项目目录下找不到node_modules目录
//就会往父目录寻找 直到根目录为止

//生成一个express模块
var app = express();
//指定一个静态目录
app.use(express.static('www'));
app.use(bodyParser.urlencoded({
	extended: false
}));

//ajax请求
//get方法
app.get('/ajax/get', (req, res) => {

	res.status(200).send('您好' + req.query.name + '您的年龄是:' + req.query.age + '岁')
})
//post方法
app.post('/ajax/post', (req, res) => {
	res.status(200).send('您好'+req.body.name + '您的年龄是:' + req.body.age + '岁')
})
app.get('/ajax/json',(req,res)=>{
	
})

app.listen(3000, function(req, res) {
	console.log('服务器正常启动！')
})