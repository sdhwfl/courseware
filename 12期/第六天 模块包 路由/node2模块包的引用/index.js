/**
 * Created by Administrator on 2016/11/7.
 */

//在node中，通过require关键字来完成页面与页面之间的引用
//require('文件的名称')就可以了


//    在查找模块的时候，首先
//    1.在内部查找
//    2.在node_module文件夹下寻找
var http = require('http');

//引用helloworld模块
var hello = require('helloworld');
var result = new hello()
result.sayHello();

//引用wfl模块
var info = require('wfl');
var result2=new info();
result2.intro();
//总结：require引用模块(node_module),引用文件('./helloworld');

//推荐使用模块来扩展自己的代码
//创建自己的模块的步骤
//1、创建自己的模块文件，myModule,把他放到node_modules文件夹下面，给所有的模块放到一起
//2、在node_modules文件夹里面创建package.json文件，指明模块的启动文件名称(index.js)
//3、在启动文件中，编写自己的模块代码，最后使用module.exports暴露



