/**
 * Created by Administrator on 2016/10/24 0024.
 */
$(function () {
    $('.title_nav').hover(function () {
        $('.nav_updown').stop().slideToggle(300);
    });
    $('.nav_updown').hover(function () {
        $(this).stop().slideToggle(300);
    });
    $('.title_nav li').hover(function () {
        var index = $(this).attr('data-index');
        $('.nav_updown ul:nth-child('+index+')').show().siblings().hide();
    });
    $('.nav_updown ul').hover(function () {
        $(this).show()
    });

// 轮播图
    function showBanner(width) {
        var newLeft = parseInt($('.banner').css('left')) + width;
        newLeft = newLeft < -4904?0:newLeft;
        newLeft = newLeft > 0?-3678:newLeft;
        $('.banner').css('opacity','0.5');
        setTimeout(function () {
            $('.banner').css('opacity','1');
        },200)
        $('.banner').css('left',newLeft+'px');
        var index = (newLeft/-1226)+1;
        // console.log(index);
        $('.banner_btn span:nth-child('+index+')').addClass('circle').siblings().removeClass('circle');
    }
    $('.banner_next').click(function () {
        showBanner(-1226);
    });
    $('.banner_prev').click(function () {
        showBanner(1226);
    });
    var autoShow = setInterval(function () {
        showBanner(-1226)
    },3000);
    $('.container').mouseenter(function () {
            clearInterval(autoShow)
        }
    );
    $('.container').mouseleave(function () {
        autoShow =setInterval(function () {
            showBanner(-1226);
        },3000);
    });
    $('.banner_btn span').click(function () {
        var index = ($(this).index())*-1226;
        console.log(index);
        $(this).addClass('circle').siblings().removeClass('circle');
        $('.banner').css('left',index+'px');
        $('.banner').css('opacity','0.5');
        setTimeout(function () {
            $('.banner').css('opacity','1');
        },100)
    });
});