/**
 * Created by Administrator on 2016/11/10.
 */

var data=new FormData();
data.append('name','sdh')
data.append('age',23)
data.append('content','宝贝简直是太好了，简直是物超所值呢！');

var xhr=new XMLHttpRequest();
xhr.onreadystatechange=function () {
    if(xhr.status==200 && xhr.readyState==4){
        console.log(xhr.responseText);
    }
}

xhr.open('POST','/common');
xhr.send(data)