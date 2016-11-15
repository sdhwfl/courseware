var express = require('express');
var app = express();
app.use(express.static('www'));

function utf8(req, res, next) {
	console.log("utf8")
	res.set("Content-Type", "text/html;Charset=utf-8 ")
		//  res.set({
		//  	"属性名":"属性值"
		//  })
		//这是中间处理过程，交给下一个函数处理
	next();
}

function first(req, res, next) {
	console.log("我是第一个处理函数")
	next();
}

function second(req, res, next) {
	console.log("我是第二个处理函数")
	next();
}

function third(req, res, next) {
	console.log("我是第三个处理函数")
	next();
}
//res.redirect 服务器端跳转到某一个页面
app.get("",(req,res)=>{
	var age= Math.floor(Math.random()*10)+20
	res.redirect(`/hi/宋典花/${age}`)
})
//get
//参数1：路径
//参数2：处理函数1
//……
//参数n处理函数n-1
app.get('/hi/:name/:age',utf8, first, second, third, function(req, res) {
	// console.log('这是根目录');
	//res.end("这是最后一个处理函数！")
	//req.params 获取url path中的参数 形成的对象
	var name = req.params.name
	var age = req.params.age
	res.status(200).end(`您好${name},您今年${age}岁了`);
	
	//建议传参的时候 使用 url path
	//?name=value
	//更容易被搜索引擎识别
	//因此 被称为友好的url
})

app.listen(3000, function() {
	console.log('颂宋，您的服务器正常启动！');
})