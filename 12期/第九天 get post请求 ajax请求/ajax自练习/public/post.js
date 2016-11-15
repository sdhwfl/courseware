/**
 * Created by Administrator on 2016/11/10.
 */
var xhr=new XMLHttpRequest();
xhr.onreadystatechange=function () {
    if(xhr.status==200 && xhr.readyState ==4){
        console.log(xhr.responseText)
    }
}
xhr.open('POST','common');
//设置头部的Content-type属性
xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
xhr.send('name=wfl&ag=23&content=这本书不错，简直和正版一模一样呢');