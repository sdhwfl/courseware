/**
 * Created by Administrator on 2016/11/9.
 */

var express = require('express');
var Router = express.Router();


Router.get('/', function (req, res) {
    //res.headersSent 用来检测响应是否发送
    // console.log(res.headersSent)
    //res.append 在指定的field的HTTP头部追加特殊的值value。
    // 如果这个头部没有被设置，那么将用value新建这个头部。
    // value可以是一个字符串或者数组。
    //  追加响应体的内容
    // res.append('info','hello sdh')
    //发送对象、数组、字符串类型的对象
    // res.send('hello');
    // console.log(res.headersSent)
    // res.cookie设置cookie信息
    // console.log(res.cookie)
    // res.end()结束本次响应 在此操作之后的所有操作都没有作用
    // res.get获取响应头部的信息
    // console.log(res.get);
    // 获取响应信息的某一个属性
    // 以JSON格式传递输数据
    // res.json({name:'sdh'})
    //跨域
    // res.jsonp({name:'wfl'})
    // res.redirect重定向 跳转 状态吗301
    // res.redirect('http://www.baidu.com')
    // 设置响应体
    // res.set()
    res.render('index')

})
Router.post('/user', function (req, res) {
    var regUser = /^[a-z0-9_-]{3,16}$/;
    var regPass = /^[a-z0-9_-]{6,18}$/;
    var username = req.body.username;
    var password = req.body.password;
    var regUser1 = regUser.test(username);
    var regPass1 = regPass.test(password);


    var isLogin = null;
    if (regUser1 && regPass1) {
        isLogin = true;
        res.render('modal', {isLogin: isLogin,regUser1:regUser1})
    } else {
        isLogin = false;
        res.render('modal', {isLogin: isLogin,regUser1:regUser1})
    }

})
Router.get('/user', function (req, res) {
    res.render('user')
})
module.exports = Router;