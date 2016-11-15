/**
 * Created by Administrator on 2016/11/7.
 */

var fs=require('fs');

//读取的流
var readeStream=fs.createReadStream('input.txt');

//写入的流
var writeStream=fs.createWriteStream('output.txt');

//读取的操作流入写入的操作中
readeStream.pipe(writeStream);
console.log('程序执行结束');











































