/**
 * Created by Administrator on 2016/11/9.
 */
var express = require('express')
var app = express();
//引入路由
var Router=require('./routers/index')
//设置静态目录
app.use(express.static('public'));
//应用路由
app.use('/',Router);

//引入模板
app.set('views', './views');
//设置模板引擎为ejs
app.set('view engine', 'ejs');

app.listen(3000, function () {
    console.log('服务器正常启动！')
})