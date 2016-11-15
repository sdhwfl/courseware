
  function Rect(x,y,l, w) {

	this.show = function() {
		var rectdiv = document.createElement('div');

		rectdiv.style.position = 'absolute';
		rectdiv.style.top = x  + 'px';
		rectdiv.style.left = y  + 'px';
		rectdiv.style.width = w * 2 + 'px';
		rectdiv.style.height = l * 2 + 'px';
	
		rectdiv.style.border = '1px solid blue';

		document.body.appendChild(rectdiv);
	}
}