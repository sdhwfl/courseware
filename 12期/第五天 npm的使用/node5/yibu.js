/**
 * Created by Administrator on 2016/11/4.
 */
var fs = require('fs');

fs.readFile('input.txt', function (err, data) {
    if(err){
        console.error(err);
    }
    console.log(data.toString())

})
console.log('执行结束')