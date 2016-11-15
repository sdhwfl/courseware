function formatIp(val) {
	if(!val) {
		return "";
	}
	val = val == "::1" ? "192.168.0.1" : val;
	if(val.startsWith("::ffff:")) {
		val = val.substr(7);
	}
	console.log(val);
	return val
}

function formatTime(val) {
	//	if(!val) {
	//		return "";
	//	}
	var now = new Date(val);
	var year = now.getFullYear();
	var month = now.getMonth() + 1;
	var date = now.getDate();
	var hours = now.getHours();
	var minutes = now.getMinutes();
	var seconds = now.getSeconds();
	hours = hours < 10 ? '0' + hours : hours;
	minutes = minutes < 10 ? '0' + minutes : minutes;
	seconds = seconds < 10 ? '0' + seconds : seconds;
	//2016-10-09 10:00：00
	return(year + '-' + month + '-' + date + ' ' + hours + ":" + minutes + ":" + seconds);
}

function formatContent(val) {
  if (!val) {
    return "";
  }
  var str = val.replace(/</g, "&lt;");
  var str = str.replace(/>/g, "&gt;");
  return str;
}

$(function() {
	$(".back").click(function() {
		history.go(-1);
	})
})

