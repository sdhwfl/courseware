//画一个点
//定义一个构造函数，可以接收两个参数：x坐标 y坐标
function point(x, y) {
	//this.x this.y 负责记录坐标
	this.x = x;
	this.y = y;
	//show方法具体去显示
	this.show = function() {
		var pointdiv = document.createElement('div');
		pointdiv.style.position = 'absolute';
		pointdiv.style.top = this.y + 'px';
		pointdiv.style.left = this.x + 'px';
		pointdiv.style.width = 10 + 'px';
		pointdiv.style.height = 10 + 'px';
		pointdiv.style.borderRadius = '50%';
		pointdiv.style.backgroundColor = 'red';
		document.body.appendChild(pointdiv);
		//设置div样式
		//将div元素添加到body中显示
	}
}

//画圆  构造函数接收两个参数，一个圆心坐标，一个是圆半径
function Circle(p, r) {
	this.p = p;
	this.r = r;
	this.p.show();
	this.show = function() {
		var circlediv = document.createElement('div');

		circlediv.style.position = 'absolute';
		circlediv.style.top = this.p.x - r + 'px';
		circlediv.style.left = this.p.y - r + 'px';
		circlediv.style.width = r * 2 + 'px';
		circlediv.style.height = r * 2 + 'px';
		circlediv.style.borderRadius = '50%';
		//circlediv.style.backgroundColor = 'deeppink';
		circlediv.style.border = '1px solid blue';

		document.body.appendChild(circlediv);
	}
}