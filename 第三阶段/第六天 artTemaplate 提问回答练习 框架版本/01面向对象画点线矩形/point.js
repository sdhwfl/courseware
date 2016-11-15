// 点 构造函数
function Point(x, y, color) {
  this.x = x;
  this.y = y;

  //给它默认值
  this.color = color || 'red';
  this.radius = '5';

  this.width = 1;

  // 在页面中显示一点
  this.show = function() {
    var div = document.createElement('div');
    div.style.position = 'absolute';
    div.style.left = this.x - this.radius + 'px';
    div.style.top = this.y - this.radius + 'px';
    div.style.height = this.radius * 2 + 'px';
    div.style.width = this.radius * 2 + 'px';
    div.style.borderRadius = '50%';
    div.style.backgroundColor = this.color;

    document.body.appendChild(div);
  }
  // 在页面中显示一圆环
  this.showCicle = function() {
    var div = document.createElement('div');
    div.style.position = 'absolute';
    div.style.left = this.x - this.radius - this.width + 'px';
    div.style.top = this.y - this.radius - this.width + 'px';
    div.style.height = this.radius * 2 + 'px';
    div.style.width = this.radius * 2 + 'px';
    div.style.borderRadius = '50%';
    div.style.border = this.width + 'px solid ' + this.color;

    document.body.appendChild(div);
  }

  //计算从当前点到另一个点的距离
  this.caleDistance = function(p2){
    var w = p2.x - this.x;
    var h = p2.y - this.y;
    return Math.sqrt( w*w + h*h);
  }

  //计算当前点到另一个点连线与x轴夹角弧度
  this.caleArc = function(p2){
    var x = p2.x - this.x;
    var y = p2.y - this.y;
    return Math.atan( y / x);
  }

  //计算当前点到另一个点连线与x轴夹角角度
  this.caleDegree = function(p2){
    return this.caleArc(p2) / Math.PI * 180;
  }
 
}
//通过构造方法创建一个对象
var point1=new Point(100,200)

// point1.caleDistance = function(p2){

// }







