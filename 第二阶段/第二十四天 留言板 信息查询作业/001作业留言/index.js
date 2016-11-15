const express = require('express');
// 引入body-parser
const bodyParser = require('body-parser');
// 引入multer模块
const multer = require('multer');
// 作用主要是用来上传文件
// 模拟formdata处理

// 引入nodeJs 文件系统模块
const fs = require('fs');
// 生成一个express模块
const app = express();
// 生成一个multer对象
const form = multer();
app.use(express.static('www'));
// 使用bodyParser 过滤生成 对提交值进行url编码
app.use(bodyParser.urlencoded({ extended: false }))

app.get('', (req, res) => {
  console.log('这是根目录');
})

// 加载留言
app.get('/loadMessages', (req, res) => {
  console.log('1111');
  // 读取留言内容
  fs.readFile("data/messages.txt", (err, data) => {
    // 所有留言字符串
    var messages = data.toString().trim();
    // 发送回去
    res.status(200).send(messages);
  });
});
// 增加留言
app.post('/addMessage', (req, res) => {
  // console.log(req.body.title);
  var title = req.body.title;
  var time = new Date().getTime();
  var ip = req.ip;
  // if(ip.startWith())
  // console.log(req);
  // console.log(ip);
  var content = req.body.content;
  var reg1 = /</g;
  var reg2 = />/g;
  content = content.replace(reg1,'&lt;')
  content = content.replace(reg2,'&gt;')
  // 要增加的内容对象
  var messagesObj = {
    title,
    time,
    ip,
    content,
  };
  // 要增加的内容对象
  var messagesStr = JSON.stringify(messagesObj);

  // 读取留言内容 判断有没有内容目的是为了要不要加一个逗号
  fs.readFile("data/messages.txt", (err, data) => {
    var douhao = (data.toString().trim().length > 0) ? ',' : '';
    fs.appendFile('data/messages.txt', douhao + messagesStr, (err) => {
    	if(! err){
    		res.status(200).send('ok');
    	}
    });

  });
})



app.listen(3000, () => {
  console.log('服务器正常起动');
})
