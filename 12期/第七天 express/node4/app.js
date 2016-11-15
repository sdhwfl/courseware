
var express=require('express');
var app=express();

//引用路由模块
var route=require('./routers/index');
//应用路由
app.use('/',route);

//引入并应用路由也可以连写如下所示
// app.use(require('./routers/index'));

//设置静态目录
app.use(express.static('public'))
//设置模板的存放目录
app.set('views','./views');
//设置模板引擎为jade/ejs
app.set('view engine', 'ejs');
app.listen(3000,function (req,res) {
    console.log('node is ok')
})

