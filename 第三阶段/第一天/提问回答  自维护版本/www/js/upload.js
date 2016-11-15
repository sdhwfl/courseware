$(function() {
	$("form").submit(function(ev) {
		ev.preventDefault();
		var data = new FormData(this);
		$.ajax({
			type: "POST",
			url: "/user/photo",
			data: data,
			contentType: false,
			processData: false,
			success: function(res, status, xhr) {
				if(res.code == "success") {
					$.popup(res.content, function() {
						location.href = "index.html"
					})
				} else {
					$.popup(res.content)
				}

			}
		})
	})

})