const express = require('express'),
  app = express();

app.use(express.static('www'));

//utf8 发送一个响应头 说明发送的信息编码
function utf8(req, res, next) {
  console.log("utf8")
  res.set("Content-Type", 'text/html; charset=utf-8');
  // res.set({
  //   "属性名：":属性值
  // })
  //这是中间流程，交给下一个函数处理
  next();
}

function first(req, res, next) {
  console.log('我是第一个处理函数')
  next();
}

function second(req, res, next) {
  console.log('我是第二个处理函数')
  next();
}

function third(req, res, next) {
  console.log('我是第三个处理函数')
  next();
}
app.get("", (req, res) => {
    // 跳转到另一个页面
    var age =  Math.floor(Math.random() * 10) + 20;
    res.redirect(`/hi/尹学江/${age}`)
  })
  // get
  // 参数1：路径
  // 参数2：处理函数1
  // ....
  // 参数n：处理函数n-1
  // 参数n：
app.get('/hi/:name/:age', utf8, first, second, third, (req, res) => {
  // req.body
  // res.end("这是最后一个处理函数！！")
  // req.params 获取url path中的参数 形成对象
  var name = req.params.name;
  var age = req.params.age;
  res.status(200).end(`您好${name},您今年${age}岁了`)

  // 建议传参 url path进行传参
  // ?name=value
  // 更容易被搜索引擎识别
  // 因此 被称为友好的“url” friendly url

})

app.listen(3000, () => {
  console.log('服务器正常起动');
})
