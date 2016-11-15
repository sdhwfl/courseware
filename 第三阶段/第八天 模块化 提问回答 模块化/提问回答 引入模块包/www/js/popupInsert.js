// 自定义插件 首页引入才能使用
  $.extend({
    popup: function(value,callback) {
      // this.each(function() {

      // });
      $(".popup").remove();
      $(".mask").remove();

      // 声明变量插入内容
      var html = "<div class=\"popup popup01\">" + "  <div class=\"pop-close\">x</div>" + "  <div class=\"pop-title\"></div>" + "  <div class=\"pop-content\"></div>" + "</div>" + "<div class=\"mask\"></div>";
      $("body").append(html);
      $(".pop-content").html(value);
      $(".popup").hide();
      $(".popup").fadeIn();
      $(".mask:eq(0)").fadeIn();
      $("body").on("click", ".pop-close", function() {
        $(this).parents(".popup").fadeOut('fast', function() {
          this.remove();
        });
        $(".mask").fadeOut('fast', function() {
        if(typeof callback =="function")	{
        	setTimeout(callback,1000)
        }
          this.remove();
        });
      })

    }
  })