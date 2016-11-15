/**
 * Created by Administrator on 2016/11/10.
 */

//所有的数据都必须以字符串或者类字符串(json)的形式传递
$.ajax({
    url: '/common',
    method: 'POST',
    data: {
        name: '宋典花',
        score: 5,
        content: '宝贝很好，很喜欢'
    },
    //默认情况下，请求会自动转化为字符串，设置为false，将不会自动转化
    processData:true,
    beforeSend:function () {
        alert('post')
    },

}).done(function (data, state, jqXHR) {
    // console.log(JSON.stringify(data))
    console.log(data)
}).fail(function (error) {
    console.log(error);
})