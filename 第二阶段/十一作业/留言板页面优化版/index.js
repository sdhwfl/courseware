var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser')
var multer = require('multer');

var app = express();
var form = multer();
app.use(express.static('www'));
app.use(bodyParser.urlencoded({ extended: false }))

//加载留言
app.get('/load', function (req, res) {
    console.log('1111');
	fs.readFile('liuyan.txt', function (err, data) {
		var mess = data.toString().trim();
		res.status(200).send(mess);
	})
})


//增加留言
app.get('/add', function (req, res) {   
	var title = req.query.title;
	var content = req.query.content;
	var ip = req.ip;
	var now = new Date();
    var year = now.getFullYear();
	var month = now.getMonth()+1;
	var date = now.getDate();
	var hours = now.getHours();
	var minutes = now.getMinutes();
	var seconds = now.getSeconds();
	hours = hours < 10 ? '0' + hours : hours;
	minutes = minutes < 10 ? '0' + minutes : minutes;
	seconds = seconds < 10 ? '0' + seconds : seconds;
	var time = year + '-' + month + '-' + date + ' ' + hours + ":" + minutes + ":" + seconds;
	var messobj = {
		title,
		time,
		ip,
		content,
	};
	var messStr = JSON.stringify(messobj);
	fs.readFile('liuyan.txt', function (err, data) {
		var douhao = (data.toString().trim().length > 0) ? ',' : '';
		fs.appendFile('liuyan.txt', douhao + messStr, function (err) {
			if (!err) {
				res.status(200).send('ok');
			}

		})
	})

})


app.listen(3000, function () {
	console.log('亲爱的小主，服务器来了！')
})
