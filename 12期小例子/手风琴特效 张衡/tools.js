/**
 * Created by hama on 2016/11/2.
 */

//面对对象的插件写法
(function($,window,document){
    var LZY = {
        version:1.0,
        author:'lizhiyuan',
        init:function(){
            console.log('我是初始化的方法')
        },
        show:function(){
            //this是谁？
            this.css('display','block');
        },
        hide:function(){
            this.css('display','none');
        },
        fadein:function(){
        	this.css('display','block');
        	this.animate({
        		opacity:1,
        	},1000)
        },
        fadeout:function(){
        	this.animate({
        		opacity:0
        	},1000,function(){
        		 $(this).css('display','none');
        	});
        },
       animate:function(){
        	this.stop().animate({width:150},500)
		   		.siblings().stop().animate({width:100},500);
        },
        animate1:function(){
        	this.stop().animate({width:150},500)
		   		.siblings().stop().animate({width:100},500);
        },

    };
    $.fn.lzyTab = function (option){
        return this.each(function(){
            var $this = $(this);
            //接下来我要判断option是否是正常的字符串和对象的方法
            if(typeof option == 'string' && LZY[option]){
                return LZY[option].call($this);
            }else if(!option){
                return LZY.init($this);
            }else if(!LZY[option] || typeof option == 'object'){
                $.error('参数传递错误');
                return this;
            }
        })
    }


})($,window,document)