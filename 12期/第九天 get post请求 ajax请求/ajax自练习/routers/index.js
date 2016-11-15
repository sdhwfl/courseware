/**
 * Created by Administrator on 2016/11/10.
 */
var express = require('express');
var Router = express.Router();
var multer=require('multer');
var form=multer();
Router.get('/',function (req,res) {
    res.render('index')
})

Router.get('/common',function (req,res) {
    console.log(req.query);
    res.status(200).send('感谢您的来访！欢迎下次再来!')
})

Router.post('/common',form.array(),function (req,res) {
    console.log(req.body)
    res.status(200).send('再次欢迎您的到来！')
})
module.exports=Router;