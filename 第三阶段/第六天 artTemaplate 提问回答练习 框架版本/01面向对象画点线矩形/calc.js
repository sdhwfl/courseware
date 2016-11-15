//计算两点之间的距离
function caleDistance(p1, p2){
	var w = p2.x - p1.x;
	var h = p2.y - p1.y;

	return Math.sqrt( w*w + h*h);
}
// console.log( caleDistance({x:0,y:0}, {x:3,y:4}) )

//计算两点之间连线与x轴夹角弧度
function caleArc(p1, p2){
	var x = p2.x - p1.x;
	var y = p2.y - p1.y;
	return Math.atan( y / x);
}

//计算两点之间连线与x轴夹角角度
function caleDegree(p1, p2){
	return caleArc(p1, p2) / Math.PI * 180;
}

