var express = require('express');
var fs = require('fs');
var bodyparser = require('body-parser');
//引入multer模块
//作用主要是用来上传文件 
//模拟formdata的处理

var multer = require('multer');
var app = express();
//生成一个multer对象
var form = multer();
app.use(express.static('www'));
//multer请求
//第二个参数form.array在正式处理以formdata方式提交的数据
//如果 发现formdata 提交的数据 会把这些数据提取出来放入reqbody中
app.post('/multer', form.array(), function(req, res) {
	//req.body就包括了用form.data提交过来的数据
	console.log(req.body);
	res.set('name','sdh');
	res.set({
		"aaa":111,
		"bbb":222
	})

	//响应的是一个json字符串
	res.status(200).send(JSON.stringify(req.body));
	//req.get获取请求头的内容
	var a = req.get('Content-Type');
	var b=req.get('User-Agent');
	var c=req.get('Referer');
	
	console.log(a);
	console.log(b);
	console.log(c);
	console.log(req.headers);
	
})

app.get('/form', form.array(), function(req, res) {
	//req.body就包括了用form.data提交过来的数据
	console.log(req.query);
	//设置响应头
	
	//响应的是一个json字符串
	res.status(200).send(JSON.stringify(req.query));

})
app.listen(3000, function(req, res) {
	console.log('您好！服务器正常上线！')
})