/**
 * Created by Administrator on 2016/11/11.
 */
//请求所有留言

var xhr0 = new XMLHttpRequest();
xhr0.onreadystatechange = function(){
    if(xhr0.readyState == 4 && xhr0.status == 200){
        var arr0 = JSON.parse(xhr0.responseText);
            var q= arr0.length -1;
            var information = arr0[q];
            var result0 = information.name;
        document.querySelector('#name').innerHTML = result0;
        document.querySelector('#name2').innerHTML = result0;
        /////////////////////////////////////////////////////
//        document.querySelector('#name3').innerHTML = result0;
    }
}
xhr0.open('GET','/information');
xhr0.send();