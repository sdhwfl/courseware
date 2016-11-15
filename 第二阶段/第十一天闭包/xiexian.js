
function Line(x,y,h, w) {
	this.show = function() {
		var hr = document.createElement('hr');
		hr.style.position='absolute';
		hr.style.top=x+'px';
		hr.style.left=y+'px';
		hr.style.height = h + 'px';
		hr.style.width = w + 'px';
		hr.style.backgroundColor = 'black';
      
		document.body.appendChild(hr);
	}
}