/**
 * Created by Administrator on 2016/11/11.
 */
var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
var multer = require('multer');
var form = multer();
var Router = require('./routes/index');

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));
app.use('/', Router);

app.listen(3000, function () {
    console.log('服务器正常启动...');
})








