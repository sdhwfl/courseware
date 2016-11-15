/**
 * Created by hama on 2016/11/10.
 */

//第一步，创建一个XMLHttpRequest对象
var xhr = new XMLHttpRequest();

//第二步，检查和接收数据
xhr.onreadystatechange = function(){
    switch(xhr.readyState){
        case 0 :
            console.log("请求还未发送");
            break;
        case 1:
            console.log('请求正在处理中...');
            break;
        case 2:
            console.log('请求开始发送');
            break;
        case 3:
            console.log('请求正在发送');
            break;
        case 4:
            console.log('请求完毕');
            console.log(responseText);//返回的文本格式的数据
            console.log(responseXML);//XML格式的数据
            break;
    }
}
//最后一步，发送的方式和发送的地址，send发送.
xhr.open('GET','/login');
xhr.send();