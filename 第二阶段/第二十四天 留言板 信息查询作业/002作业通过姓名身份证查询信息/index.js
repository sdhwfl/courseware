var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser')
var multer = require('multer');

var app = express();
var form = multer();
app.use(express.static('www'));
app.use(bodyParser.urlencoded({
	extended: false
}));

app.get('/search', (req, res) => {
console.log('这是查询')
var name = req.query.name
var phone = req.query.phone
fs.readFile('students.txt', (err, data) => {
	var students = data.toString().trim();
	// 所有学生信息json对象
	var studentsObj = JSON.parse('[' + students + ']');
	var student;
	studentsObj.forEach(function(element, index) {
		if((name === element.name) &&( phone === element.phone)) {
			student = element; 
		}
	})
	console.log(student)
		//发回去一个学生对象
	if(student == null) {
		res.status(200).send('该学生信息不存在！')
	} else {
		res.status(200).send(JSON.stringify(student))
	}

})

})

app.listen(3000, function() {
	console.log('宋典花同学！您的服务器正常启动！')
})