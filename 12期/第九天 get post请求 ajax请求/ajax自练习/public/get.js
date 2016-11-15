/**
 * Created by Administrator on 2016/11/10.
 */
var xhr=new XMLHttpRequest();

xhr.onreadystatechange=function () {
    if(xhr.readyState==4 && xhr.status ==200){
       console.log(xhr.responseText);
    }
}
xhr.open('GET','/common?name=sdh&age=23&wangWang=tb201314hh6&content=宝贝很好,很喜欢');
xhr.send();