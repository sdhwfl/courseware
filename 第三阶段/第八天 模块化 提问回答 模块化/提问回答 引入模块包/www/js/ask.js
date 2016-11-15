$(function() {
			// if($.cookie("name")) {
            //
			// } else {
			// 	location.href = "login"
			// }

			$("form").submit(function(ev) {
				ev.preventDefault();
				var data = $(this).serialize();
				$.get('/api/ask', data, function(res, statusText, xhr) {
					if(statusText == "success") {
						if(res.code == "success") {
							$.popup(res.content, function() {
								location.href = '/'
							})
						} else {
							$.popup(res.content);
						}

					}
				})
			})
	})