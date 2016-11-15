/**
 * Created by Administrator on 2016/11/4.
 */
//引入模块
var fs=require('fs');
//了解一下模块的内部
// console.log(fs)
//读取文件内容
var data=fs.readFileSync('input.txt')

//输出文件内容
console.log(data.toString());
console.log('文件读写完毕');