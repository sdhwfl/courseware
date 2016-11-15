$(function() {
	$('form').submit(function(eve) {
		eve.preventDefault();
		var data = $(this).serialize();
		$.post('/login', data, function(res, statusText, xhr) {
			if(statusText == "success") {
				//console.log(res);
				if(res.code == "success") {
					$.cookie("name", res.data.name)
					$.popup(res.content, function() {
						location.href = "index.html"
					})
				} else {
					$.popup(res.content);
				}

			}
		})

	})

})