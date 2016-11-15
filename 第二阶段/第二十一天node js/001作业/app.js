var express = require("express");

var fs = require('fs');

var app = express();
app.use(express.static('www'));
app.get('/adduser', function(req, res) {

		//注册
		fs.readFile('adduser.txt', function(err, data) {
			if(err) {

			} else {
				var name = req.query.name;
				var psd = req.query.password;
				var content = name + "&" + psd;
				var mydata = data.toString() + ',' + content
				var users = data.toString();
				//			var usersobj = {};
				var usersarr = users.split(',');
				var a = 0
				usersarr.forEach(function(ele, ind) {
					var userarr = ele.split("&");
					if(userarr[0] == name) {
						res.status(200).send('<p style="color:red">用户名已存在！')
					} else {
						a++
					}
					if(a == usersarr.length) {
						fs.writeFile('adduser.txt', mydata);
						res.status(200).send('<p style="color:green">恭喜您' + req.query.name + '注册成功！')
					}

				})
			}
		})

	})
	//登录
app.get('/user/landing', function(req, res) {
	var name = req.query.name;
	var psd = req.query.password;
	fs.readFile('adduser.txt', function(err, data) {
		if(err) {

		} else {

			var users = data.toString();
			var a = 0
			var usersarr = users.split(',');
			usersarr.forEach(function(ele, ind) {
				var userarr = ele.split("&");
				if(userarr[0] == name && userarr[1] == psd) {
					res.status(200).send('<p style="color:green">恭喜您' + req.query.name + '登录成功！')
				} else {
					a++
				}
				if(a == usersarr.length) {
					res.status(200).send('<p style="color:red">恭喜您' + req.query.name + '登录失败！')
				}

			});

		}
	})
})
app.listen(3000, function() {
	console.log('服务器启动成功！')
})