const express = require('express'),
  bodyParser = require('body-parser'),
  multer = require('multer'),
  cookieParser = require('cookie-parser'),
  fs = require('fs'),
  app = express();


app.use(express.static('www'));

// 调用 diskStorage方法() 有一个对象参数
// destination 上传的目的地
// filename 上传的文件名字
var storage = multer.diskStorage({
  destination: function(req, file, cb) {
  	//cb第二个参数：上传到服务器上的目录
    cb(null, 'www/uploads')
  },
  filename: function(req, file, cb) {
  	// file原始上传图片相关信息的对象
  	console.log(file);
  	// cb第二个参数：上传到服务器上的名字
    cb(null, file.originalname)
  }
});
// 执行一下
var upload = multer({ storage: storage })

// 使用bodyParser 过滤生成 对提交值进行url编码
app.use(bodyParser.urlencoded({ extended: true }))
  //使用cookieParser
app.use(cookieParser())

// upload.single('photo') 上传一个图片 图片photo是input名字
// upload名 上面生成的multer对象
app.post('/user/photo',upload.single('photo'), (req, res) => {
  console.log('user/photo');
  res.status(200).send("success");
})

app.listen(3000, () => {
  console.log('服务器正常起动');
})
