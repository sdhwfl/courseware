/**
 * Created by Administrator on 2016/11/1.
 */
//html() dom内容的提取
//css() dom样式的设置
//append() 插入到dom
//parent() 获取dom的父元素

(function ($, window, document) {
//    jq插件最基本的写法，不含参数的写法
    $.fn.plugin = function () {
        //$('div') 此处的this指向div集合
        return this.each(function () {
            //此处的this指向每一个div元素
            var $this = $(this);
            $this.css({
                color: 'red',
                fontSize: '50px'
            })
        })
    }
    //传递参数
    $.fn.plugin2 = function (option) {
        return this.each(function () {
            var defaults = {
                color: "red",
                fontSize: '20px'
            };
            //    得到最终的参数
            var settings = $.extend({}, defaults, option);
            var $this = $(this);
            $this.css({
                color: settings.color,
                fontSize: settings.fontSize
            })
        })
    }
})($, window, document)





















