/**
 * Created by Administrator on 2016/10/31.
 */
//$.方法的扩展，工具方法的扩展
(function($,window,document){
//    工具方法的代码开始
    $.message =function (option) {
        var megText = option;
        var megContent ='<div>' +option+'</div>';
        $('body').append(megContent)
    }
//    对数组进行排序

    $.skt =function (array){
     function sortNumber(a,b){
         return a-b;
     }
     console.log(array.sort(sortNumber));
    }

//    对数组进行去重操作
    $.un =function(array) {
        var arr= array;
        var newArr = [];
        arr.forEach(function (ele, index, arr) {
            if (arr[index] != arr[index + 1]) {
                newArr.push(ele)
            }
        });
        return newArr;
    }
})($,window,document)







































