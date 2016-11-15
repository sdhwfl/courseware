/**
 * Created by hama on 2016/11/10.
 */

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var Router = require('./routes/index');
//可以在这里引入jquery也可以在模板页引入
// var jquery=require('jquery')

app.set('views','./views');
app.set('view engine','ejs');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',Router);

app.listen(3000,function(){
    console.log('node is OK');
})