/**
 * Created by Administrator on 2016/11/10.
 */

$.ajax({
    url:'/common',
    method:'POST',
    data:{
        name:'花花',
        age:23,
        wangWang:'tb201314hh6',
        content:'衣服合身，很显瘦，下次还来'
    }
}).success(function (data,states,jqXHR) {
    console.log(JSON.stringify(data));
}).error(function (error) {
    console.log(error)
})