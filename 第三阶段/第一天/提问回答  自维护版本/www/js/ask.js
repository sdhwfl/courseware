$(function() {
			if($.cookie("name")) {

			} else {
				location.href = "login.html"
			}

			$("form").submit(function(ev) {
				ev.preventDefault();
				var data = $(this).serialize();
				$.post('/user/ask', data, function(res, statusText, xhr) {
					if(statusText == "success") {
						if(res.code == "success") {
							$.popup(res.content, function() {
								location.href = 'index.html'
							})
						} else {
							$.popup(res.content);
						}

					}
				})
			})

		})