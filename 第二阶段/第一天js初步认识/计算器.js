var a = document.getElementById('s1').value;
var b = document.getElementById('s2').value;
var a1 = document.getElementById('s4').value;
var b1 = document.getElementById('s5').value;
var c = a * b;
var c1 = a1 * b1;

function jisuan() {
    document.getElementById('jieguo').innerHTML = c;
    c = Math.round(c * 100) / 100;
}
function cal() {
    document.getElementById('return').innerHTML = c;
    c1 = Math.round(c1 * 100) / 100;
    alert(c1);
}
cal();

