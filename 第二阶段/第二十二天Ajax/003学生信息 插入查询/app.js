//引入express
var express = require('express');
//引入nodejs 文件系统模块
var fs = require('fs');
var bodyParser = require('body-parser');
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
//学生信息录入
app.post('/insert', function(req, res) {
		//console.log('插入数据文件已找到')
		var stu = req.body;
		var stuStr = JSON.stringify(stu);

		fs.readFile('stuinfo.txt', function(err, data) {
			var stusStr = data.toString().trim();
			var stusArr = JSON.parse("[" + stusStr + "]");
			var isIn = false;
			stusArr.forEach(function(ele, ind) {
				if(stu.phone == ele.phone) {
					isIn = true;
				}
			})
			if(isIn) {
				res.status(200).send('<p style="color:red">该同学信息已经存在！</p>')
			} else {
				var douhao = stusStr.length > 0 ? ',' : '';

				fs.appendFile('stuinfo.txt', douhao + stuStr, function() {
					if(err) {
						res.status(200).send('<p style="color:red>该同学信息已经存在！</p>')
					} else {
						res.status(200).send('<p style="color:green">信息录入成功</p>')
					}
				})
			}

		})

	})
	//学生信息查询
app.post('/query', function(req, res) {
		//console.log('查询数据文件已找到')
		var stu = req.body;
		fs.readFile('stuinfo.txt', function(err, data) {
				var stusStr = data.toString().trim();
				var stusObj = JSON.parse("[" + stusStr + "]")
                  
                var i=0
				var isIn = stusObj.some(function(ele, ind, arr) {
					i=ind
					return(stu.name == arr[ind].name);
				})
				if(isIn) {
					res.status(200).send("姓名:"+stusObj[i].name+'<br>'+"年龄:"+stusObj[i].age+'<br>'+"班级:"+stusObj[i].grade+'<br>'+"电话:"+stusObj[i].phone)
				} else {
					res.status(200).send('<p style="color:red">该同学信息不存在！');
				}

			}) //fs.readFile结尾

	}) //app.post结尾

app.listen(3000, function(req, res) {
	console.log('服务器正常启动！');
})