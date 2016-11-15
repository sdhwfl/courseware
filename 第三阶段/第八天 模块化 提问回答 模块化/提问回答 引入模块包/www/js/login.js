$(function() {
	$('form').submit(function(eve) {
		eve.preventDefault();
		var data = $(this).serialize();
		$.get('api/login', data, function(res, statusText, xhr) {
			if(statusText == "success") {
				//console.log(res);
				if(res.code == "success") {
					$.cookie("name", res.data.name,{path:'/'})
					$.popup(res.content, function() {
						location.href = "/"
					})
				} else {
					$.popup(res.content);
				}

			}
		})

	})

})