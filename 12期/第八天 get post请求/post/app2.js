/**
 * Created by Administrator on 2016/11/9.
 */
var express=require('express')
var app=express();
//引入body-parser
var bodyParser = require('body-parser')
var Router=require('./routers/index')


app.set('views','./views');
app.set('view engine','ejs');

//使用body-parser
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static('public'))
app.use('/',Router);


app.listen(3000,function () {
    console.log('node is ok')
})



