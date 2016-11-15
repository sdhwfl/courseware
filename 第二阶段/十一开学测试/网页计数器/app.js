var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');

var app = express();
app.use(express.static('www'));

app.get('/count', function(req, res) {
	//console.log('sdh')
	//访客数
	var num;
	//读取文件
	fs.readFile('count.txt', (err, data) => {
		//获取访客是第多少位
		var num = parseInt(data.toString());
		if(isNaN(num)) {
			num = 0;
		}
		num++;
		//console.log(num);
		//写文件
		fs.writeFile('count.txt', num, (err) => {
			if(err) {
              
			} else {
				//响应第几位访客
				res.status(200).send(num.toString());
			}
		});
	});

})

app.listen(3000, function() {
	console.log('服务器正常启动！')
})