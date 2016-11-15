/**
 * Created by Administrator on 2016/11/11.
 */
//请求所有留言

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
        var arr = JSON.parse(xhr.responseText);
        var result = '';
        for(var i = arr.length -1;i> -1;i--){
            var message = arr[i];
            result +='<li>';
            result += message.name;
            result += ':';
            result += message.content;
            result +='<span>';
            result += toTime(message.time);
            result +='</span>';
            result +='</li>';
        }
        document.querySelector('.talk_text').innerHTML = result;
    }
}

function toTime(date){
    var date = new Date(date);
    var Hours= date.getHours();
    var Minutes = date.getMinutes();
    var Seconds= date.getSeconds();
    Hours = Hours < 10 ? '0' + Hours : Hours ;
    Minutes = Minutes < 10 ? '0' + Minutes : Minutes;
    Seconds = Seconds < 10 ? '0' + Seconds : Seconds;

    return Hours + ':' + Minutes + ':' + Seconds;
}
xhr.open('GET','/message');
xhr.send();
