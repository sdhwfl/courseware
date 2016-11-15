/**
 * Created by Administrator on 2016/11/7.
 */

var set = require('sdhSet');

var arr1 = [1, 2, 3, 4, 5, 5, 5];
var arr2 = [4, 5, 5, 5, 6, 7, 7, 8, 8];
var arr3 = set.unique(arr2)
var Set = new set(arr1);
//得到数组的交集
console.log(Set.inter(arr3));
//得到数组的差集
console.log(Set.difference(arr3));
