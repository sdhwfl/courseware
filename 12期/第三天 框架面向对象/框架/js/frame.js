/**
 * Created by Administrator on 2016/11/2.
 */
//完成一个框架
//第一步的内容是完成一个自执行的函数 把所有的框架代码放在里面，
//目的是为了防止全局变量的污染，并且通过window将对象暴露给外部使用
//保证内部的变量和方法不影响全局
//同时,传递window和document的目的是为了保证局部使用
(function (window, document) {
    //创建一个$的函数，在函数的内部我们返回一个对象，这个对象是通过
    //new关键字实例化base构造函数实现的.当我们通过$()调用这个函数的时候
    //$('参数')会直接传递给构造函数,最终在构造函数的私有属性里面放对应的
    //DOM元素
    var $ = function (arc) {


        return new base(arc);
    }

//  设计一个构造函数
    function base(arc) {
        //    存放的就是DOM元素了
        this.elements = [];
        //创建一个新的数组
        var childElement = [];
        if (typeof arc == 'string') {
            // 字符串 #id .class div div>span
            switch (arc.charAt(0)) {
                //id选择
                case '#':
                    childElement = document.getElementById(arc.substring(1));
                    break;
                //class选择
                case '.':
                    var list2 = document.getElementsByClassName(arc.substring(1));
                    for (var i = 0; i < list2.length; i++) {
                        childElement.push(list2[i]);
                    }
                    break;
                //其他选择 tag
                default:
                    var list3 = document.getElementsByTagName(arc);
                    for (var i = 0; i < list3.length; i++) {
                        childElement.push(list3[i]);
                    }
                    break;
            }
        } else if (typeof arc == 'function') {
            // 不是字符串  而是function(){}
            // 等待整个DOM元素加载完毕的时候再执行
            DomReady(arc);
        }
        //   最终我们将这个数组的内容给到this
        this.elements = childElement;

    }

//    构造函数的原型里面放置方法
    base.prototype.init = function () {
        console.log('初始化的方法');
        return this;
    }

    base.prototype.css = function (name, value) {
        /*对DOM元素进行设置*/
        for (var i = 0; i < this.elements.length; i++) {
            this.elements[i].setAttribute('style', name + ':' + value);
        }
        return this;
    }

    base.prototype.addClass=function(className){
        for (var i = 0; i < this.elements.length; i++) {
            this.elements[i].className=className;
        }
        return this;
    }

    base.prototype.removeClass=function(className1){
        for (var i = 0; i < this.elements.length; i++) {
            this.elements[i].className='';
        }
        return this;
    }

    base.prototype.html = function (content) {
        for (var i = 0; i < this.elements.length; i++) {
            this.elements[i].innerHTML = content;
        }
        return this;
    }
    base.prototype.href = function (link) {
        for (var i = 0; i < this.elements.length; i++) {
            this.elements[i].href = link;
        }
        return this;
    }


    //工具初始化的方法
    $.init = function () {
        console.log('初始化的工具方法')
    }
    //挂载到原型上面的方法
    $.extend = function (name, fn) {
        base.prototype[name] = fn;
    }
    //  等待DOM加载完毕的时候、
    function DomReady(fn) {
        document.addEventListener(document, 'DOMContentLoaded', function () {

        });
        removeEventListener(document, 'DOMContentLoaded');
    }

    // 挂载到window上是为了方便全局使用
    //通过$暴露给外部使用
    window.$ = $;

})(window, document)






























