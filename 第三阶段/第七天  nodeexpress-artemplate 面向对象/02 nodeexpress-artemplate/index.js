const express = require("express");
const template = require("art-template");
app = express();
//模板是否进行缓存
//开发阶段设置为false    方便我们看变化 
//上线时设置为true 可以减小服务器的压力
template.config("Cache", false)
	//指定使用解析的模板引擎
app.engine(".html", template.__express);
//指定使用html视图引擎
app.set("view engine", 'html')
	//指定views目录 为模板的存放目录
	//app.set('views', __dirname + '/views');
app.get("/", function(req, res) {
	console.log("这是根目录")
		//template(参数1，参数2)
		//参数1  不再是模板id  而是模板的名字字符串(不包括.html)
		//在当前文件的目录下
		//参数二：数据
	var html = template("template", {
		htitle: "网站的标题",
		hTitle: "这里是h1标题",
		content: "这里是内容文本",
		tags: ["html", "css", "javascript", "jQuery", "nodeJs"]
	});
	console.log(html);
	res.status(200).send(html);
})

app.get("/tem", (req, res) => {
//	console.log("tem");
//res.render(参数1，参数2)  这是express里专为模板提供的方法
//参数1：模板字符串 不包括扩展名(.html),另外它会去存放模板的目录去寻找
//默认目录是views
//参数2：数据
//参数3：回调函数 如果没有直接把解析结果传给浏览器
res.render("template", {
				htitle: "网站的标题2",
				hTitle: "这里是h1标题2",
				content: "这里是内容文本2",
				tags: ["html", "css", "javascript", "jQuery", "nodeJs"]
				})
      
})

//app.get('/user/reg')
//app.post('/api/user/reg')


app.listen(3000, function() {
	console.log("服务器正常启动")
})

