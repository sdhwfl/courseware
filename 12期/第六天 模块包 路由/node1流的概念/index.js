/**
 * Created by Administrator on 2016/11/7.
 */
//引入events模块
var events = require('events');
//创建事件的管理对象
var eventEmitter = new events.EventEmitter();

//在这个对象上添加状态和释放状态
eventEmitter.on('state1', function () {
    console.log('状态1已经执行')
})
eventEmitter.on('state1', function () {
    console.log('状态1被执行了两次')
})

//触发这个状态
eventEmitter.emit('state1');


console.log('程序结束');





















