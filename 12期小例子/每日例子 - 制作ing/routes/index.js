var express = require('express');
var Router = express.Router();
var multer = require('multer');
var fs = require('fs');
var form = multer();

Router.get('/',function(req,res){
    res.render('index');
})
Router.get('/user',function(req,res){
    res.render('user');
})

Router.post('/user',form.array(),function(req,res){
    var name = '匿名用户';
    var content = req.body.content;
    var message = {
        name:name,
        content:content,
        time:new Date()
    };
    fs.exists('data',function (exists){
         if(!exists){
             fs.mkdirSync('data');
         }
    })
    fs.appendFile('./data/message.txt',JSON.stringify(message) + ',',function(err){
        if(err){
            console.log('文件保存的时候出错');
        }
    })
    res.status(200).json({message:'留言发布成功'})
})
Router.get('/message',function(req,res){
    fs.exists('./data/message.txt',function (exists){
        fs.readFile('data/message.txt',function(err,data){
            if(!err){
                var result = '[' + data;
                result = result.substr(0,result.length -1);
                result = result + ']';
                res.status(200).send(result);
            }else{
                res.status(200).send('[]');
            }
        })
    })
})
///////////////////////////////////////////////////////////
//读取用户名字和密码
Router.post('/index',form.array(),function(req,res){
    var name = req.body.name;
    var password = req.body.password;
    console.log(name);
    var information = {
        name:name,
        password:password
    };
    fs.exists('data',function (exists){
        if(!exists){
            fs.mkdirSync('data');
        }
    })
    fs.appendFile('./data/information.txt',JSON.stringify(information) + ',',function(err){
        if(err){
            console.log('文件保存的时候出错');
        }
    })
    res.status(200).json({information:'留言发布成功,请刷新页面查看留言'})
})
Router.get('/information',function(req,res){
    fs.exists('./data/information.txt',function (exists){
        fs.readFile('data/information.txt',function(err,data){
            if(!err){
                var result = '[' + data;
                result = result.substr(0,result.length -1);
                result = result + ']';
                res.status(200).send(result);
            }else{
                res.status(200).send('[]');
            }
        })
    })
})




module.exports = Router;