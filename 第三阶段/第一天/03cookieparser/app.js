const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const cookieParser = require('cookie-parser'); 
const fs = require('fs');

const app = express();

const form = multer();
app.use(express.static('www'));
// 使用bodyParser 过滤生成 对提交值进行url编码
app.use(bodyParser.urlencoded({
		extended: true
	}))
	//使用cookieParser
app.use(cookieParser())


app.get('/landing', (req, res) => {
	console.log('landing');
	// 输出cookies对象
	console.log(req.cookies);
})

app.listen(3000, () => {
	console.log('服务器正常起动');
})