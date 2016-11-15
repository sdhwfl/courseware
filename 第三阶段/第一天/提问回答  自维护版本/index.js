var express = require('express');
var fs = require('fs');
var cookieParser = require('cookie-parser');

var bodyParser = require('body-parser');
var multer = require('multer');
var app = express();
//指定一个静态目录
app.use(express.static('www'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({
	extended: false
}));

//调用了diskStorage的方法   一个硬盘存储的方法
//destination上传的目的地
//filename上传的文件名
var storage = multer.diskStorage({
	destination: function(req, file, cb) {
		cb(null, 'www/uploads');
	},
	filename: function(req, file, cb) {
		//在req
		req.file = file;
		var name = req.cookies.name;
		//console.log(file)
		//cb第二个参数:上传到服务器上面的目录
		if(file.mimetype == "image/jpeg") {
			var extension = ".jpg"
		} else if(file.mimetype == "image/png") {
			var extension = ".png"
		} else if(file.mimetype == "image/gif") {
			var extension = ".gif"
		}
		cb(null, name + extension)

	}
})

//执行一下
var upload = multer({
	storage: storage
})

//upload.single('photo') 上传一个图片 图片photo是input的名字
//upload名 上面生成的multer对象
//用户上传头像
app.post('/user/photo', upload.single('photo'), (req, res) => {
	//console.log(req.body);
	if(req.file.mimetype == "image/jpeg") {
		res.status(200).json({
			code: "success",
			content: "头像上传成功！"
		})
	} else {
		res.status(200).json({
			code: "error",
			content: "图片扩展名必须是jpg格式！"
		})
	}

})

//登录
app.post('/login', function(req, res) {
	var user = req.body;
	fs.readFile('users/user.txt', (err, data) => {
		var usersStr = data.toString().trim();
		var usersObj = JSON.parse("[" + usersStr + "]");
		var isIn = usersObj.some(function(ele, ind, arr) {
			return(user.name == ele.name && user.password == ele.password)
		})
		if(isIn) {
			res.status(200).json({
				"code": "success",
				"content": "登录成功！",
				data: user
			})
		} else {
			res.status(200).json({
				"code": "error",
				"content": "用户名或者密码不正确！"
			})
		}

	})

})

//注册
app.post('/reg', (req, res) => {
		req.body.ip = req.ip
		req.body.time = new Date().getTime();
		console.log(req.body);
		//注册用户对象
		var user = req.body;
		if(user.password == user.password01) {
			//删除一个密码
			delete user.password01;
			console.log(user);
			fs.readFile('users/user.txt', (err, data) => {
				var users = data.toString().trim();
				var douhao = users.length > 0 ? "," : "";
				var userArr = JSON.parse("[" + users + "]");
				var isIn = userArr.some(function(element) {
					return(user.name == element.name);
				})
				if(isIn) {
					res.status(200).json({
						"code": "error",
						"content": "用户名已经存在！"
					})
				} else {
					fs.appendFile('users/user.txt', douhao + JSON.stringify(user), (err) => {
						if(!err) {
							res.status(200).json({
								"code": "success",
								"content": "注册成功！"
							})
						}
					})

				}
			})

		} else {
			//响应一个json数据 ajax接收就是发过来的json数据
			res.status(200).json({
				"code": "error",
				"content": "重复密码和密码不一致！"
			})
		}

	})
	//用户提交问题
app.post('/user/ask', function(req, res) {
	//console.log(req.body);
	var user = {};
	
	user.content = req.body.content;
	user.ip = req.ip;
	user.time = new Date().getTime();
	user.name = req.cookies.name;
	console.log(user);
	var txtName = user.time + ".txt";
	fs.appendFile('questions/' + txtName, JSON.stringify(user), (err) => {
		res.status(200).json({
			code: "success",
			content: "提问成功！"
		})
	})
})

//问答列表
app.get("/questions", (req, res) => {
	//读取一个目录
	var questions = [];
	//file所有的文件名的数组
	fs.readdir("questions", (err, files) => {
		//console.log(files);
		if(!err) {
			//倒序排列
			files.reverse();
			//循环读取文件的内容 加入questions数组里面
			files.forEach(function(file) {
				fs.readFile("questions/" + file, (err, data) => {
					questions.push(JSON.parse(data.toString().trim()));
					if(questions.length == files.length) {
						//console.log(questions);
						res.status(200).json({
							code: "success",
							data: questions
						})
					}
				})

			});

		} else {

		}

	})
})

//用户回答问题
app.post('/user/answer', (req, res) => {
	 console.log(req.body)

	var answer = req.body;
	answer.ip = req.ip;
	answer.name = req.cookies.name;
	answer.time = new Date().getTime();

	fs.readFile("questions/" + answer.question + ".txt", (err, data) => {
		if(!err) {
			//问题的对象
			var askobj = JSON.parse(data.toString());
			if(typeof askobj.answer == "object") {
				askobj.answer.push(answer)
			} else {
				askobj.answer = [];
				askobj.answer.push(answer)
			}
			fs.writeFile("questions/" + answer.question + ".txt", JSON.stringify(askobj),(err) => {
				if(!err) {
					res.status(200).json({
						code: "success",
						content: "回答问题成功！"
					})
				}
			})

		}
	})

})

app.listen(3000, function(req, res) {
	console.log('您好！服务器正常上线！')
})