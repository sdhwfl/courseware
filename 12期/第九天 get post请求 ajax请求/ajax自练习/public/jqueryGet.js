/**
 * Created by Administrator on 2016/11/10.
 */

$.ajax({
    url:'/common',
    method:'GET',
    data:{
        name:'sdh',
        score:5,
        content:'宝贝太好了，简直是大爱呢！'
    }
}).done(function (data,states,jqXHR) {
    console.log(data)
}).fail(function (error) {
    console.log(error)
})