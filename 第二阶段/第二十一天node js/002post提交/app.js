 //引入express {let：变量只在作用域内可以访问到} {const：静态变量声明 一旦声明不能发生改变  声明的时候一定要赋值}

const express = require('express');
//引入nodejs 文件系统模块
const fs = require('fs');
//首先在本项目目录下找node_modules目录、
//其次找express 目录 如果是文件就找文件名
//但是 如果说在本项目目录下找不到node_modules目录
//就会往父目录寻找 直到根目录为止
//引入body-parser
const bodyParser=require('body-parser')
//body-parser 把提交过来的 请求体里面的内容 进过处理之后 
//放到了 req.body里面
//生成一个express模块
const app = express();
//指定一个静态目录
app.use(express.static('www'));
//使用body-parser过滤生成  对提交值进行url编码 
app.use(bodyParser.urlencoded({extended:false}))
//端口号

//接收get请求处理
//参数1：请求的地址
//如果上面制定静态目录 第一个找静态目录下的index.html 第二个去找app.get('/')
//其他请求发送请求 则会找对应的请求处理
//(req, res)=>相当于function(req,res) 这种写法叫做拉姆运算符
app.get('/', (req, res)=> {
	console.log('我接收登陆命令');
})

//接收登陆提交
app.post('/user/landing', (req, res)=> {
	//通过body-parser处理之后  把提交信息
	console.log(req.body);
	
    
	//注册的用户名
	//fs.readFile 参数一：文件名（包括地址和名字
	//参数二：回调 参数1 err 错误信息 data：参数2：文件内容
	//nodejs回调函数一般都是错误在前 体现了nodejs错误优先思想
	fs.readFile('user.txt', (err,data)=>{
		if(err) {

		} else {
			//文件的内容
			const users = data.toString();
			const usersobj={};
			//首先字符串处理 所有用户的数组
			const usersarr=users.split('&');
			usersarr.forEach((element,index)=>{
				//一个用户的数组 0是用户名 1密码
				const userarr=element.split("=");
				//添加用户名和密码
				usersobj[userarr[0]]=userarr[1];
			});
			console.log(usersobj);
			//判断用户名对应的密码是否一致
			if(usersobj[req.body.name]==req.body.password){
				res.status(200).send('<p style="color:green">恭喜您'+req.body.name+'登录成功！')
			}
			else{
				res.status(200).send('<p style="color:red">用户'+req.body.name+'不存在或者密码错误！')
			}

		
		}

	})

})

app.listen(3000, function(req, res) {
	console.log('服务器正常启动！')
})