// 画一个矩形
function Rectangle(p1, p2, color, size) {
  this.p1 = p1;
  this.p2 = p2;

  // 默认值
  this.color = color || 'red';
  this.size = size || 1;

  this.show = function() {
    // 画不成矩形
    if (this.p1.x == p2.x || this.p1.y == this.p2.y) return;

    var div = document.createElement('div');
    div.style.position = 'absolute';
    div.style.left = Math.min(this.p1.x, this.p2.x) - this.size / 2 + 'px';
    div.style.top = Math.min(this.p1.y, this.p2.y) - this.size / 2 + 'px';
    div.style.width = Math.max(this.p1.x, this.p2.x) - Math.min(this.p1.x, this.p2.x) - this.size + 'px';
    div.style.height = Math.max(this.p1.y, this.p2.y) - Math.min(this.p1.y, this.p2.y) - this.size + 'px';
    div.style.border = this.size + 'px solid ' + this.color;
    div.style.borderRadius = this.size / 2 + 'px';
    document.body.appendChild(div);
  }

}
