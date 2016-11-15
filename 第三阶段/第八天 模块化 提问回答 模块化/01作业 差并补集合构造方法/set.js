
//集合的构造方法
function Set(arr){
	//构造函数中的私有变量
	var items =[];
	//传过来参数是不是数组
	if((arr instanceof Array) && (arguments.length == 1)){
		items = arr;
	}else{
		items = [].concat(Array.from(arguments))
	}
	//当前函数的名字
	// arguments.callee


	//去重
	function unique(arr){
		var result=[];
		arr.forEach(function(element,index){
			if(result.indexOf(element) == -1){
				result.push(element)
			}
		})
     return result;
	}
	//对象的属性items是一个数组
	this.items=unique(items);
	//console.log(this.items)
}
//	相等  返回一个布尔值
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

//   求并集 返回一个集合
Set.prototype.union=function (set) {
    var arr1=this.items;
	var arr2=set.items;
	var result=[];
	arr1.forEach(function (ele) {
	  result.push(ele)
	})
	arr2.forEach(function (ele) {
		if(arr1.indexOf(ele) ==-1) {
			result.push(ele)
		}
	})

	return (new Set(result));
}
//	求交集
Set.prototype.intersection=function (set) {
    var arr1=this.items;
	var arr2=set.items;
	var result=[];
	arr1.forEach(function(ele){
		if(arr2.indexOf(ele) >-1){
			result.push(ele)
		}
	})
	return (new Set(result));
}
//	求补集合
Set.prototype.difference=function (set) {
	var arr1=this.items;
	var arr2=set.items;
	var result=[];
	arr1.forEach(function(ele){
		if(arr2.indexOf(ele) == -1){
			result.push(ele)
		}
	})
	arr2.forEach(function(ele){
		if(arr1.indexOf(ele) == -1){
			result.push(ele)
		}
	})
	return (new Set(result));
}

//创建一个集合对象
var set1=new Set(1,2,3,5,3,7);
// var set2=new Set(3,5,8,9,5);
 var arr1=[3,5,8,9,5]
//创建一个集合对象
var set2=new Set(arr1)
var set4 = new Set(1,2,3,5,3,7);
console.log(set1.equals(set4));



//console.assert(true,"不会在控制台输出");
//console.assert(false,"会在控制台输出");


var arr1=[1,2,3,4];
var arr2=arr1;
arr1.push(5)
console.log(arr2)











