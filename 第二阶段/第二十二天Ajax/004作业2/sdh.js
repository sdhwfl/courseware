var express = require('express');
var fs = require('fs');
var bodyparser = require('body-parser');

var app = express();
app.use(express.static('www'));
//学生信息录入
app.get('/luru', function(req, res) {
		//console.log('录入文件已经找到！')
		var stu = req.query;
		var stustr = JSON.stringify(stu);

		fs.readFile('stus.txt', function(err, data) {
			var stusStr = data.toString().trim();
			var stusArr = JSON.parse("[" + stusStr + "]");
			var isIn = false;
			stusArr.forEach(function(ele, ind) {
				if(stu.idcard == ele.idcard) {
					isIn = true;
				}

			})
			if(isIn == true) {
				res.status(200).send('<p style="color:red">' + req.query.name + '同学信息已经存在！' + '</p>')
			} else {
				var comma = stusStr.length > 0 ? ',' : '';
				fs.appendFile('stus.txt', comma + stustr, function() {
					if(err) {
						res.status(200).send('<p style="color:red">不好意思信息录入失败！')
					} else {
						res.status(200).send('<p style="color:green">' + req.query.name + '同学信息录入成功！' + '</p>')
					}
				})
			}
		})

	})
	//学生信息查询
app.get('/chaxun', function(req, res) {
	var stu = req.query;

	fs.readFile('stus.txt', (err, data) => {
		var stusStr = data.toString().trim();
		var stusarr = JSON.parse("[" + stusStr + "]");

		var i = 0;
		var isIn = stusarr.some(function(ele, ind, arr) {
			i = ind
			return((stu.name == arr[ind].name) && (stu.idcard == arr[ind].idcard));
		})
		if(isIn) {
			res.status(200).send("姓名:" + stusarr[i].name + '<br>' + "身份证号码:" + stusarr[i].idcard + '<br>' + "班级:" + stusarr[i].grade + '<br>' + "手机号:" + stusarr[i].phone) 
		} else {
			res.status(200).send('<p style="color:red">该同学信息不存在！');
		}

	})

})
app.listen(3000, function(req, res) {
	console.log('您好！服务器正常上线！')
})