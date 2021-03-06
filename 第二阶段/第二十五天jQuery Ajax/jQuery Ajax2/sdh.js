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

// jQeruy get接收
app.get('/jqget', (req, res) => {
  console.log(req.query.name);
  res.status(200).send('您的名字：' + req.query.name)
});
// jQeruy post接收
app.post('/jqpost', (req, res) => {
  console.log(req.body.name);
  res.status(200).send('您的名字：' + req.body.name)
})

// jQeruy getjson接收
app.post('/jqgetjson', (req, res) => {

})


app.listen(3000, () => {
  console.log('服务器正常起动');
})
