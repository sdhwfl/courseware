/**
 * Created by Administrator on 2016/11/9.
 */
var express = require('express');
var Router = express.Router();

Router.get('/', function (req, res) {
//    访问首页
    res.render('index');
})
Router.get('/user', function (req, res) {
    //访问的是user页面
    //express的操作函数
    // console.log(req.app)
    //取出url的前缀部分
    // console.log(req.baseUrl);
    //取出主机名
    //console.log(req.hostname);
    //取出url信息
    // console.log(req.originalUrl)
    //正则匹配的字符串或者是：匹配到的值
    //console.log(req.params);
    //获取到不带参数的路径
    //  console.log(req.path)
    // 获取协议、
    // console.log(req.protocol)
    // req.query获取动态参数的值
    // console.log(req.query.username)
    // console.log(req.query.age)
    // 获取详细的url信息
    // console.log(req.route);
    //获取子域名
    //  console.log(req.subdomains);
    // 判断是否为ajax请求
    //  console.log(req.xhr);
    // 检查传递的文档类型是否被接受
    // console.log(req.accepts('html'));
    //返回请求体的内容
    //console.log(req.get('User-Agent'))

    var username = req.query.username;
    var age = req.query.age;
    // res.status(200).send(username + ":" + age)
    res.render('user', {
        username: username,
        age: age,
    })
})
module.exports = Router;