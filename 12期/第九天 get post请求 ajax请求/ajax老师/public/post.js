var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        console.log(xhr.responseText)
    }
}
xhr.open('POST', '/common');
//设置头部的Content-type属性
xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
xhr.send('name=sdh&score=5&content=宝贝不错,很喜欢')