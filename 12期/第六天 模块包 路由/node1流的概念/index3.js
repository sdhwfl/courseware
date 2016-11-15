/**
 * Created by Administrator on 2016/11/7.
 */

var fs = require('fs');
var data = 'hello';

var  createStream = fs.createWriteStream('output.txt');

//设置编码格式
createStream.write(data, 'UTF8');
//标记文件末尾
createStream.end();

createStream.on('data', function () {

    console.log('文件正在写入');
});

createStream.on('error', function () {
    console.log('发生错误')
})

createStream.on('finish', function () {
    console.log('文件写入成功');
});

console.log('程序读取结束');


/*var fs = require('fs');

var data = '我是要写入的数据';

var createWriteStream = fs.createWriteStream('output.txt');

//设置编码格式
createWriteStream.write(data,'UTF8');

createWriteStream.end();

createWriteStream.on('data',function () {
    console.log('文件正在写入');
})
createWriteStream.on('error',function () {
    console.log('文件发生错误');
})
createWriteStream.on('finish',function () {
    console.log('文件写入成功');
})
console.log('程序读取结束');*/
