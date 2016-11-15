$(function() {
	$("form").submit(function(ev) {
		ev.preventDefault();
		var data = new FormData(this);
		$.ajax({
			type: "POST",
			url: "/api/user/photo",
			data: data,
			contentType: false,
			processData: false,
			success: function(res, status, xhr) {
				if(res.code == "success") {
					$.popup(res.content, function() {
						location.href = "/"
					})
				} else {
					$.popup(res.content)
				}

			}
		})
	})

})