$(function() {

			var name = $.cookie("name", name);
			if(name) {
				$(".user-name").html("<span class=\"glyphicon glyphicon-user\"></span>" + name).addClass("online");
				$('.ask').click(function() {
					location.href = "/ask"
				})
			} else {
				$(".user-name").html("<span class=\"glyphicon glyphicon-user\">登录</span>");
			}

			$('body').on("click", ".user-name", function() {
				if($(this).hasClass("online")) {
					$('.user-info').css({
						top: 50 + "px",
						right: -7 + "px"
					})
					$('.user-info').slideToggle();
				} else {
					location.href = "/login"
				}

			})
			$(".user-info a:first-child").click(function() {
				location.href = "/upload"
			})
			$(".exit").click(function(event) {
				$.cookie("name", name, {
					expires: -1
				})
				$.popup("退出成功", function() {
					location.href = "/"
				});
			});
         //提问跳转
       $('.askquest').click(function(){
       	if(name){
       		location.href="/ask"
       	}else{
       		location.href="/login"
       	}
       })
			//问答列表
			$.getJSON('/questions', function(res, statusText, xhr) {
					if(statusText == "success") {
						//所有问题的数据(包括回答)
						var allAsks = res.data;
						var html = "";
						allAsks.forEach(function(ele, index) {
							html = html + "<li class=\"ask\" data-time=\"" + ele.time + "\">" +
								"<img src=\"uploads/" + ele.name + ".jpg\" alt=\"\" class=\"user-photo fl\" onerror=\"this.src=\'/images/img01.jpg\'\"/>" +
								"<h4 class=\"h4-title\">" + ele.name + "</h4>" +
								"<p class=\"ptext\">" + formatContent(ele.content) + "</p>" +
								"<p class=\"ptime\">" + formatTime(ele.time) + "</p>" +
								"</li>"
								// console.log(html);
								//ele.answer  一个问题的所有回答
								if(ele.answer){
									ele.answer.forEach(function(answer){
										//answer 每一个回答
										html = html + "<li class=\"anser\" data-time=\"\">" +
								"<img src=\"uploads/" + answer.name + ".jpg\" alt=\"\" class=\"user-photo fr\" onerror=\"this.src=\'/images/img01.jpg\'\"/>" +
								"<h4 class=\"h4-title\">" + answer.name + "</h4>" +
								"<p class=\"ptext\">" + formatContent(answer.content) + "</p>" +
								"<p class=\"ptime\">" + formatTime(answer.time) + "</p>" +
								"</li>"
									})
								}
						})
						$(".messages").html(html);

					}
				})
				//点击某个问题事件
			$(".messages").on("click", ".ask", function(e) {
				//获取问题的文件名
				var question = $(this).attr("data-time")
					//把文件名写入cookie
				$.cookie("question", question);
				location.href = "/answer";
			})

		});