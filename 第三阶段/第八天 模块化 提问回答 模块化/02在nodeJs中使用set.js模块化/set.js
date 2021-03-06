//集合的构造方法
function  Set(arr) {
    //构造函数的私有变量
    var items = [];
    //判断传过来的参数是不是数组
    if((arr instanceof Array) && arguments.length==1){
        items = arr;
    }else {
        items =[].concat(Array.from(arguments));
    }
    //去重
    function unique(arr) {
        var result =[];
        arr.forEach(function (element,index) {
            if(result.indexOf(element) == -1){
                result.push(element)
            }
        });
        return result;
    }
    //对象的属性
    this.items = unique(items);
    // console.log(this.items);

    //相等 返回Boolean
    Set.prototype.equals=function (set) {
        //this当前构造函数创建出来的对象
        var arr1 = this.items;
        var arr2 = set.items;
        //instanceof 判断是不是子元素，是不是继承的原型链
        if(set instanceof Set){
            if (arr1.length == arr2.length){
                var isTrue = true;
                arr1.some(function (ele,index) {
                    if (arr2.indexOf(ele)==-1){
                        isTrue = false;
                    }
                });
                return isTrue;
            }else {
                return false;
            }
        }else {
            return false;
        }
    };
    //并集 返回一个集合
    Set.prototype.union = function (set) {
        var arr1 = this.items;
        var arr2 = set.items;
        var result = [].concat(arr2);
        arr1.forEach(function (ele) {
            if(result.indexOf(ele)==-1){
                result.push(ele);
            }
        });
        return new Set(result);
    };
    //交集 返回一个集合
    Set.prototype.intersection=function (set) {
        var arr1 = this.items;
        var arr2 = set.items;
        var result = [];
        arr1.forEach(function (ele) {
           if (arr2.indexOf(ele) >-1){
               result.push(ele);
           }
        });
        return new Set(result);
    };
    //补集 返回一个集合
    Set.prototype.difference=function (set) {
        var arr1 = this.items;
        var arr2 = set.items;
        var result = [];
        arr1.forEach(function (ele) {
            if (arr2.indexOf(ele)==-1){
                result.push(ele);
            }
        });
        arr2.forEach(function (ele) {
            if (arr1.indexOf(ele)==-1){
                result.push(ele);
            }
        });
        return new Set(result);
    };
}

// module.exports ={
//     name:"宋典花",
//     age:23
// };
module.exports = Set;