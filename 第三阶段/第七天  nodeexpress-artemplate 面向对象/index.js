
function SetArr(val) {
    var arr = val;
    arr.sort(function (a, b) {
        return a - b;
    });
    //去重
    this.format = function () {
        var newArr = [];
        arr.forEach(function (ele, index, array) {
            if (array[index] != array[index + 1]) {
                newArr.push(ele)
            }
        });
        return newArr;
    };
    //并集
    this.union = function (val) {
        var newArr = [];
        arr.concat(val).forEach(function (ele, index, array) {
            if (array[index] != array[index + 1]) {
                newArr.push(ele)
            }
        });
        return newArr;
    };
    //交集
    this.intersect = function (val) {
        var arr2=[];
        arr.forEach(function (ele) {
            var isIn = val.some(function (e) {
                return e==ele
            });
            if(isIn){
                arr2.push(ele);
            }
        });
        var newArr=[];
        arr2.forEach(function (ele, index, array) {
            if (array[index] != array[index + 1]) {
                newArr.push(ele)
            }
        });
        return newArr;
    };
    //差集
    this.differ=function (val) {
        var newArr=[];
        arr.forEach(function (ele) {
            var isIn = val.some(function (e) {
                return e==ele
            });
            if(!isIn){
                newArr.push(ele);
            }
        });
        return newArr;
    }
}
