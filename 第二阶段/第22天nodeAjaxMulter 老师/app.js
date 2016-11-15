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

// 使用bodyParser 过滤生成 对提交值进行url编码
app.use(bodyParser.urlencoded({ extended: false }))


// 指定一个静态目录
app.use(express.static("www"));

// multer请求
// 第2个参数form.array() 在正式处理以formdata方式提交的数据 以前
// 如果 发现formdata 提交的数据 会把这些数据提取出来放入req.body中
app.post('/multer', form.array(), (req, res) => {
  // 整个请求头的对象
  console.log(req.headers);
  // 通过req.get("") 获取请求头里面的内容
  var a = req.get('Content-Type');
  var b = req.get('User-Agent');
  console.log(a)
  console.log(b)

  // req.body就包括了 用formdata 发送过来的数据
  console.log(req.body);
  // 设置响应头
  res.set('name', 'yinxuejiang');
  res.set({
    'aaa': 1111,
    'bbb': 2222
  });
  // 响应的是一个json字符串
  res.status(200).send(JSON.stringify(req.body));
});
app.post('/form', form.array(), (req, res) => {
  // req.body就包括了 用formdata 发送过来的数据
  console.log(req.body);

  // 响应的是一个json字符串
  res.status(200).send(JSON.stringify(req.body));
});
// 端口号
app.listen(3000, function() {
  console.log('服务器正常起动...')
})
