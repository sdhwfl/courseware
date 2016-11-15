$(function() {
	//拦截form表单的提交事件
	$("form").submit(function(ev) {
		//阻止默认事件
		ev.preventDefault();
		//串行化数据 可以把表单里面的所有内容都读取出来，形成一个字符串
		var data = ($(this).serialize());
		//把表单里的所有内容都读出来，放到一个数组里
		//console.log($(this).serializeArray());
		//ajax向服务器发送请求
		$.post('/reg', data, function(res, statusText, xhr) {
			if(statusText == 'success') {
				console.log(res);
				if(res.code == "success") {
					$.popup(res.content, function() {
						location.href = "login.html"
					})

				} else {
					$.popup(res.content)
				}
			}
		})
	})
})