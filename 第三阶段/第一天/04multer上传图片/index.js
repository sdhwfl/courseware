var express = require('express'),

	fs = require('fs'),
	bodyparser = require('body-parser'),

	cookieParser = require('cookie-parser'),

	multer = require('multer'),
	app = express();
  app.use(express.static('www'));
   //调用了diskStorage的方法   一个硬盘存储的方法
   //destination上传的目的地
   //filename上传的文件名
var storage = multer.diskStorage({
	destination: function(req, file, cb) {
		cb(null, 'www/uploads')
	},
	filename: function(req, file, cb) {
		//file原始上传图片相关信息
		//console.log(req);
		console.log(file)
		//cb第二个参数:上传到服务器上面的目录
		cb(null, file.originalname)
	}
})
//执行一下
var upload = multer({
	storage: storage
})

//upload.single('photo') 上传一个图片 图片photo是input的名字
//upload名 上面生成的multer对象
app.post('/user/photo',upload.single('photo'),(req,res)=>{
	console.log('/user/photo');
	res.status(200).send('上传成功！')
})


app.listen(3000, function(req, res) {  
	console.log('您好！服务器正常上线！')
})