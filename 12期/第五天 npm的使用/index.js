/**
 * Created by Administrator on 2016/11/4.
 */

//首先引入http模块，为创建服务器做准备
var http = require('http');

//创建一个服务器，服务器的作用就是接收请求和返回结果
http.createServer(function (request, response) {
    // 发送 HTTP 头部
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    //  console.log(request.headers);
    // console.log(response.headers);
    response.writeHead(201, {'Content-Type': 'text/html'});

    // 发送响应数据 "Hello World"
    response.end('Hello World \n');
}).listen(2000)

// 终端打印如下信息
console.log('node is running in http://localhost:2000');









































