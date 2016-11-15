/**
 * Created by Administrator on 2016/11/7.
 */

//创建服务器
var http = require('http');
var url = require('url');
//引入路由文件
var router = require('./router');
 http.createServer(function (request, response) {
    //获取下url里面的参数
    var pathname = url.parse(request.url).pathname;
    // if(pathname=='/login'){
    //     response.end('我要登录')
    // }else if(pathname=='/admin'){
    //     response.end('我要访问后台')
    // }else{
    //     response.writeHead(200,{'Content-type':'text/plain'});
    //     response.end('服务器启动成功！')
    // }
    // 目前情况下 无论你打开什么界面都会发送"服务器启动成功"
    //但是，我们希望用户在输入/login这样的地址的时候，访问登录页面
    //在输入域名/admin访问的是后台页面
    //这个时候，我们就需要用到路由这个功能了

    //调用router函数
    router(pathname,response);

}).listen(3000);













































