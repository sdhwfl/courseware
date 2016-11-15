
var express = require('express');
var Router = express.Router();
// 加载一下
var multer=require('multer')
//实例化一下
var form = multer();

Router.get('/',function(req,res){
    res.render('index');
})
Router.get('/common',function(req,res){
    console.log(JSON.stringify(req.query));
    res.status(200).send('感谢您的评价');
})

Router.post('/common',form.array(),function (req,res) {
    console.log(req.body);
    res.status(200).send('再次感谢您的评价！')
})
module.exports = Router;

