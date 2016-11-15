/**
 * Created by hama on 2016/11/10.
 */
//发送的get请求


//1.创建一个xhr的对象
var xhr = new XMLHttpRequest();

//2.在整个监听事件中完成操作
xhr.onreadystatechange = function(){
    switch (xhr.readyState){
        case 0:
            console.log('请求未初始化');
            break;
        case 1:
            console.log('请求建立连接');
            break;
        case 2:
            console.log('请求已接收');
            break;
        case 3:
            console.log('请求处理中');
            break;
        case 4:
            console.log('请求发送成功');
            console.log(xhr.status);
            console.log(xhr.responseText);
            alert(xhr.responseText);
            console.log(xhr.responseXML);
            break;
    }
}
xhr.open('GET','/common?name=sdh&score=5&content=东西很好，非常喜欢');
xhr.send();