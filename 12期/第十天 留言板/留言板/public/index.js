/**
 * Created by Administrator on 2016/11/11.
 */

//发送一个请求所有留言的message请求
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if (xhr.status == 200 && xhr.readyState == 4) {
        //  发送已经成功了
        //console.log(xhr.responseText);
        var arr = JSON.parse(xhr.responseText);
        var result = '';
        for (var i = arr.length - 1; i > -1; i--) {
            var message = arr[i];
            console.log(message);
            result += '<section>';

            result += '<p>';
            result += message.content;
            result += '<span>';
            result += formatTime(message.time);
            result += '</span>';
            result += '</p>';

            result += '<div>';
            result += formatIP(message.ip);
            result += '</div>'

            result += '</section>'
        }
        document.querySelector('article').innerHTML = result;
    }
}

xhr.open('GET', '/message');
xhr.send()
function formatTime(time) {
    var time = new Date(time);
    var year = time.getFullYear();
    var month = time.getMonth();
    var date = time.getDate();
    var h = time.getHours();
    var min = time.getMinutes();
    var seconds = time.getSeconds();

    month = month < 10 ? '0' + month : month;
    date = date < 10 ? '0' + date : date;
    h = h < 10 ? '0' + h : h;
    min = min < 10 ? '0' + min : min;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    return year + '年' + month + '月' + date + '日' + '  ' + h + ':' + min + ':' + seconds;
}
function formatIP(ip) {
    if (ip.startsWith('::1')) {
        return '127.0.0.1'
    }
}