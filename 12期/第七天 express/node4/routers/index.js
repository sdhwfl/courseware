/**
 * Created by Administrator on 2016/11/8.
 */

var express = require('express')
var Router = express.Router()

Router.get('/', function (req, res) {
    // res.send('这是首页');
    // 返回一个html文档
    // var html = '';
    // html += '<!Doctype>'
    // html += '<html>'
    // html += '<head>'
    // html += '<meta charset="utf-8">'
    // html += '<body>'
    // html += '<h1>我是首页</h1>'
    // html += '</body>'
    // html += '</html>'
    // res.send(html)

    //使用模板引擎，返回index.ejs
    res.render('index', {
        title: '我是首页',
        list: {
            name: 'sdh',
            age: 23,
            add: '河南周口'
        },
        isLogin:true
    });
})

module.exports = Router;