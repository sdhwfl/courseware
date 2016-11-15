
var express=require('express');
var fs=require('fs');
var bodyParser=require('body-parser')
var multer=require('multer');

var app = express();
var form=multer();
app.use(express.static('www'));
app.use(bodyParser.urlencoded({
	extended: false
}));

app.get('/',function(req,res){
	console.log('这是根目录')
})
// 请求姓名列表
app.get('/list', (req, res) => {
  fs.readFile('students.txt', (err, data) => {
    // 读取的字符串
    var students = data.toString().trim();
    // 所有学生信息json对象
    var studentsObj = JSON.parse('[' + students + ']');
    // 所有学生名字的数组
    var studentsNamesArr = studentsObj.map(function(ele, index) {
      return ele.name;
    });
    console.log(studentsNamesArr)
    // 把数据转化成字符串发回去
    res.status(200).send( JSON.stringify(studentsNamesArr) );
  });
});

//个人详情
// app.get('/info', (req, res) => {
//   var name = req.query.name
//   fs.readFile('students.txt', (err, data) => {
//   	 var students = data.toString().trim();
//     // 所有学生信息json对象
//     var studentsObj = JSON.parse('[' + students + ']');
//     var student;
//     studentsObj.forEach(function(ele,index){
//     	if(name==ele.name){
//     		student=ele
//     	}
//     })
//     console.log(student)
//     //发回去一个学生对象
//     res.status(200).send(JSON.stringify(student))
//   })
// })
 
app.listen(3000,function(){
	console.log('宋典花同学！您的服务器正常启动！')
})
