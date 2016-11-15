/**
 * Created by Administrator on 2016/11/2.
 */
(function ($, window, document) {
    var sdh = {
        version: 1.0,
        author: 'sdh',
        init: function () {
            console.log('我是初始化的方法')

        },
        show: function () {
            //    this指向
            this.css('display', 'block');
        },

        hide: function () {
            //    this指向
            this.css('display', 'none');
        },
        fadein: function () {
            this.css('display', 'block');
            this.animate({
                opacity: 1,
            }, 1000);
        },
        fadeout: function () {
            this.animate({
                opacity: 0,
            }, 1000,function(){
               $(this).css('display', 'none');
            })

        }

    }

    $.fn.sdhTab = function (option) {
        return this.each(function () {
            var $this = $(this);
            console.log($this);
            //   接下来判断option是否是正常的字符串和对象的方法
            if (typeof  option == 'string' && sdh[option]) {
                return sdh[option].call($this);
            } else if (!option) {
                return sdh.init($this)
            } else if (!sdh[option] || typeof option == 'object') {
                $.error('参数传递错误！');
                return this;
            }
        })
    }


})($, window, document)