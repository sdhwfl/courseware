var express = require("express");

var fs = require('fs');
var bodyParser = require('body-parser');
var app = express();
app.use(express.static('www'));
app.use(bodyParser.urlencoded({
	extended: false
}));

 //登录
app.get('/login', function(req, res) {
		//{ name:sdh,password:1234, phone:18137806216email:1594996575@qq.com }
		//console.log('login');

		var user = req.query;
		fs.readFile('user.txt', (err, data) => {
			//所有用户的字符串
			var usersStr = data.toString().trim();
			//所有用户的对象
			var usersObj = JSON.parse("[" + usersStr + "]");
			//console.log(usersobj);

			//some对一个数组中每一个元素进行处理 返回一个结果
			//如果有一个元素处理为真 则返回值为真  
			//全部元素的处理值为假 则全部为假
			//回调参数1：数组中的每个元素  2：下标  3：数组
			var isIn = usersObj.some(function(ele, ind, arr) {
				return((user.name == ele.name) && (user.password == ele.password))
			})
			if(isIn) {
				res.status(200).send('<p style="color:green">恭喜,' + req.query.name + '登录成功！');
			} else {
				res.status(200).send('<p style="color:red">登录失败！');
			}

		})

	})
	//注册
app.get('/reg', function(req, res) {
	//{ name:sdh,password:1234, phone:18137806216,email:1594996575@qq.com }
	//console.log('sdh');

	//提交过来的信息是一个用户的对象{name：wfl,password:123,phone:18037304079,email:1594996575@qq.com}
	var user = req.query;
	//user字符串
	var userStr = JSON.stringify(user);

	fs.readFile('user.txt', function(err, data) {
		//所有用户的字符串
		var usersStr = data.toString().trim();
		var usersArr = JSON.parse("[" + usersStr + "]");
		var isIn = false;
		var a
		usersArr.forEach(function(element, index) {
				if(user.name == element.name) {
					isIn = true;
				}

			})
			//判断是不是用户
		if(isIn) {
			res.status(200).send('<p style="color:red">用户名已存在！')
		} else {
			//.trim去除空格
			var douhao = usersStr.length > 0 ? ',' : '';
			//往文件中追加内容
			//参数一：文件
			//参数二：追加的内容
			//参数三：回调
			fs.appendFile('user.txt', douhao + userStr, (err) => {
				if(err) {
					res.status(200).send('<p style="color:red>不好意思注册失败！</p>')
				} else {
					res.status(200).send('<p style="color:green">恭喜,' + req.query.name + '注册成功！</p>')
				}
			})
		}

	})

})
app.listen(3000, function() {
	console.log('服务器启动成功！')
})