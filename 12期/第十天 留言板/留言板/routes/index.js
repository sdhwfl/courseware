/**
 * Created by Administrator on 2016/11/11.
 */
var express = require('express')
var Router = express.Router();
var fs = require('fs')
var multer = require('multer');
var form = multer();
//首页
Router.get('/', function (req, res) {
    res.render('index')
})
//添加留言页面
Router.get('/add', function (req, res) {
    res.render('add')
})
//添加留言的行为
Router.post('/add', form.array(), function (req, res) {
    var content = req.body.content;
    //整合Ip和时间
    var message = {
        content: content,
        time: new Date(),
        ip: req.ip
    }
    //判断文件是否存在
    fs.exists('data', function (exists) {
        //    如果文件不存在则创建
        if (!exists) {
            fs.mkdirSync('data')
        }
    })
//    将数据存入文件中
    fs.appendFile('./data/message.txt', JSON.stringify(message) + ',', function (err) {
        if (err) {
            console.log('文件保存的时候出错了:%s', err)
        }
    })

    res.status(200).json({message: "留言发布成功！"})
})

Router.get('/message', function (req, res) {
//    首先判断下文件似乎否存在
    fs.exists('./data/message.txt', function (exists) {
        fs.readFile('data/message.txt', function (err, data) {
            //    读取保存留言的文件
            if (!err) {
                var result = '[' + data;
                //去掉最后一个逗号
                result = result.substr(0, result.length - 1);
                result = result + ']';
                //之前的数据：{数据1},{数据2},{数据3}
                //转化后的数据：[{数据1},{数据2},{数据3}]
                res.status(200).send(result);
            } else {
                res.status(200).send('[]')
            }
        })
    })
})

module.exports = Router;