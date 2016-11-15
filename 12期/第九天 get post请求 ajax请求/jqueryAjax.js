/**
 * Created by Administrator on 2016/11/10.
 */

$.ajax({
    url:'你要发送的地址',
    method:'你要发送的请求的方式',
    data:'数据',
    dataType:'数据类型',
    headers:'编辑头部信息',
    contentType:'文档类型'
}).success(function (data,state,jqXHR) {
//    请求发送成功的操作函数
}).error(function (err) {
//    请求发送失败的操作函数
})