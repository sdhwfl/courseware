/**
 * Created by Administrator on 2016/11/10.
 */
var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var Router=require('./routers/index')
app.set('views','./views')
app.set('view engine','ejs')

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'))
app.use('/',Router);
app.listen(3000,function () {
    console.log('亲爱的小主，服务器正常启动！')
})