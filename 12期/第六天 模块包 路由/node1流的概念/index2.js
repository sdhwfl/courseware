/**
 * Created by Administrator on 2016/11/7.
 */
//文件读写模块
var fs = require('fs');
//最终的数据
var data = '';

//首相创建流
var ReadStream = fs.createReadStream('input.txt');
//在流中可以绑定三个状态，data,err,finish状态
ReadStream.on('data', function (chunk) {
    data += chunk;
    console.log(data.toString());
    console.log('文件正在读写');
})

ReadStream.on('error', function () {
    console.log('文件发生错误');
})

ReadStream.on('end', function () {
    console.log(data.toString());
})

console.log('程序执行完毕');