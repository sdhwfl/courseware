/**
 * Created by Administrator on 2016/11/10.
 */
//fromData是一种新的数据格式，可以用来传输二进制和上传下载

var data = new FormData();
data.append('name', 'sdh')
data.append('score', 5)
data.append('content', '产品不错，很好')

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if (xhr.status == 200 && xhr.readyState == 4) {
        console.log(xhr.responseText)
    }
}

xhr.open('POST', '/common');
xhr.send(data)