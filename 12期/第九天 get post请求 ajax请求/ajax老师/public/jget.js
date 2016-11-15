/**
 * Created by Administrator on 2016/11/10.
 */

//默认参数的设置
$.ajaxSetup({
    url: '/common',
    method: 'GET',
})
//所有请求发送之前的操作
$.ajaxStart(function () {

})
//所有请求发送中的操作
$.ajaxSend(function () {
    
})
//所有请求发送成功的操作
$.ajaxSuccess(function () {
    
})
//所有请求发送完毕的操作
$.ajaxComplete(function () {
    
})
//所有请求发送失败执行的操作
$.ajaxError(function () {
    
})
//直接发送表单的内容
// form.serialize()
$.ajax({

    //只要是GET形式，全部是以字符串格式发送的
    // data:'name=sdh&score=5&content=宝贝很好，很喜欢',
    data: {
        name: {
            xing: '宋',
            ming: '典花',
        },
        score: 5,
        content: '宝贝很好，很喜欢'
    },
    beforeSend: function () {
        alert('get')

    }
}).success(function (data, state, jqXHR) {
    // console.log(data)
    console.log(JSON.stringify(data))
    console.log(state);
    console.log(jqXHR);
}).error(function (error) {
    console.log(error)
})
