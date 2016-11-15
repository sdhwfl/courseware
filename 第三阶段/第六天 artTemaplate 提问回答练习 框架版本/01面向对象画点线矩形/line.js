// 画对象的构造函数
function Line(p1, p2, color, size) {
  this.p1 = p1;
  this.p2 = p2;

  // 默认值
  this.color = color || 'red';
  this.size = size || 1;

  this.show = function() {
    // 判断两个点哪个是开始点
    var pStart = this.p1.x <= this.p2.x ? this.p1 : this.p2;
    // 判断两个点哪个是结束点
    var pEnd = pStart == this.p1 ? this.p2 : this.p1;

    var div = document.createElement('div');
    div.style.position = 'absolute';
    div.style.top = pStart.y - this.size / 2 + 'px';
    div.style.left = pStart.x + 'px';
    // console.dir(pStart);

    // pStart.caleDistance(pEnd) 调用点对象里的方法 返回是数值
    div.style.width = pStart.caleDistance(pEnd) + 'px';
    div.style.height = this.size + 'px';
    div.style.borderRadius = this.size / 2 + 'px';
    div.style.backgroundColor = this.color;
    div.style.transformOrigin = 'left center';
    div.style.transform = 'rotate(' + pStart.caleDegree(pEnd) + 'deg)';
    document.body.appendChild(div);

  }


}
