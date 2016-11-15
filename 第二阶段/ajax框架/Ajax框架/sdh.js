var express = require('express');
var fs = require('fs');
var bodyparser = require('body-parser');

var multer = require('multer');
var app = express();

var form = multer();
app.use(express.static('www'));



app.listen(3000, function(req, res) {
	console.log('您好！服务器正常上线！')
})