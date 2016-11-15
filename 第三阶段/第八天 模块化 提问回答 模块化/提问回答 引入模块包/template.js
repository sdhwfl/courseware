var template = require("art-template");
//是否设置缓存
template.config("Cache", false) //指定使用解析的模板引擎
template.helper("formatTime", function(val) {
    var now = new Date(val);
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var date = now.getDate();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    //2016-10-09 10:00：00
    return(year + '-' + month + '-' + date + ' ' + hours + ":" + minutes + ":" + seconds);
})

//提供内容
module.exports= template;