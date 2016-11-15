var express = require('express');
var fs = require('fs');
var cookieParser = require('cookie-parser');
//引入template模块
var template =  require("./template");
//引入multer模块
var  upload = require("./multer");
//引入公共模块 判断是否登录
var  public =require("./public")
var bodyParser = require('body-parser');

var app = express();
//指定一个静态目录
app.use(express.static('www'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({
	extended: false
}));


app.engine(".html", template.__express); //指定使用html视图引擎
app.set("view engine", 'html')
 
//网站首页  刷新页面
app.get('/', (req, res) => {

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
						res.render("index", {
							title: "首页-问答系统",
							privateJs: "index1",
							data: questions
						})

					}
				})

			});

		}
	})
	console.log("这是网站首页")

})

//upload.single('photo') 上传一个图片 图片photo是input的名字
//upload名 上面生成的multer对象

app.get('/upload',public.isLogin, function(req, res) {
	res.render("upload", {
		title: "上传图片",
		privateJs: "upload",
	})
})
//用户上传头像
app.post('/api/user/photo',public.isLogin, upload.single('photo'), (req, res) => {
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
app.get('/login', function(req, res) {
	res.render("login", {
		title: "登录",
		privateJs: "login",
	})
})

app.get('/api/login', (req, res) => {
	var user = req.query;
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

//注册页面
app.get('/register', function(req, res) {
	res.render("register", {
		title: "注册",
		privateJs: "register",
	})
})
//注册
app.get('/api/register', (req, res) => {
		req.query.ip = req.ip
		req.query.time = new Date().getTime();
		console.log(req.query);
		//注册用户对象
		var user = req.query;
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
	app.get('/ask',public.isLogin,function(req,res){
		res.render("ask",{
			title:"提交问题",
			privateJs:"ask"
		})
	})
app.get('/api/ask',public.isLogin, function(req, res) {

	var user = {};

	user.content = req.query.content;
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

//用户回答问题
app.get('/answer',public.isLogin, (req, res) => {
	res.render("answer", {
		title: "回答问题",
		privateJs: "answer"
	})
})


app.get('/api/answer/',public.isLogin, (req, res) => {
	console.log(req.query)
	var answer = req.query;
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
			fs.writeFile("questions/" + answer.question + ".txt", JSON.stringify(askobj), (err) => {
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