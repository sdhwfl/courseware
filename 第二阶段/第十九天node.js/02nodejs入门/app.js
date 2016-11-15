//安装express插件
//安装方法 npm install express --save
//node_modules  Node.js项目使用的功能模块
//卸载方法：npm uninstall express --save

//安装方法 npm init
//package.json项目配置文件 保存了项目基本信息

//app.js项目的程序文件

//body-parser
//安装方法npm install boy-parser --save

//node.js可以让javascript在浏览器之外运行
//作为web服务器的编译语言在各种系统中开发应用程序
//开发手机app
//js号称全栈编程语言

//引入插件的方法 require 函数来加载模块
//模块的默认位置在node_modules中
var express = require("express");
var bodyParser = require('body-parser')
	//调用上一步加载的express函数来创建一个web应用（app对象）
var app = express();
//调用app对象中的use 方法
//调用 express函数对象的state方法
//使用wwwroot 文件中的文件变成可以通过浏览器访问的静态资源
//静态资源：浏览器直接下载可以使用 不需要服务器程序参与处理
//比如图片 html文件 js文件 css文件
app.use(express.static('wwwroot'));

//listen 监听指定的端口 当有请求到达时 会传给上边的get、post等去处理
//第一个参数是监听的端口号  没有被占用的端口号可以使用
//第二个参数是监听成功后的回调函数
app.listen(3000, function() {
		console.log('服务器运行正常');
	})
	//启动此web的方法 在命令行中执行当前文件
	//node app.js
	//停止web的方法是、
	//关掉命令窗口 或者是ctrl c

//表示处理一个get的请求
//请求的数据是通过url中的查询字符串传到服务器的
//使用表单发起的get请求 会导致页面的刷新（实际上就是打开一个新的页面）

app.get('/user', function(request, response) {
	//request与请求相关的数据  
	//response响应的数据 表示发给浏览器的响应的数据
	//query表示查询字符串
	console.log(request.query)
	var name = request.query.name;
	var phone = request.query.phone;
	var email = request.query.email;
	var qq = request.query.qq;

	var content = '姓名：' + name + '<br>' + '电话：' + phone + '<br>' + '邮箱：' + email + '<br>' + '扣扣：' + qq;
	//200：状态码
	
	response.status(200).send(content + '<br>' + '恭喜你,提交成功!');
	
		

})