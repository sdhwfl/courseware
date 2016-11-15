//引入express
var express=require("express");
var fs=require("fs");
//生成一个应用
var app=express();
//制定一个静态目录
app.use(express.static('wwwroot'));
app.get('/user',function(req,res){
	
})
app.listen(3000,function(){
	console.log('服务器启动成功！')
})

fs.readFile('user.txt',function(err,data){
//		if(err) throw err;
		console.log(data.toString());
	});

