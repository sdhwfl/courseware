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

//得到姓名列表
app.get('/list', (req, res) => {
    var name = req.query.name;
    fs.readFile('students.txt', (err, data) => {
        var students = data.toString().trim();
        var studentsObj = JSON.parse('[' + students + ']');
        var namesArr = studentsObj.map(function (ele, ind) {
            return ele.name;
        });
        console.log(namesArr)
        // 把数据转化成字符串发回去
        res.status(200).send(JSON.stringify(namesArr));
    })
})
//一个学生的详细信息
app.get('/info', (req, res) => {
    var name = req.query.name;
    fs.readFile('students.txt', function (err, data) {
        var students = data.toString().trim();
        var studentsObj = JSON.parse('[' + students + ']');
        var stu;
        studentsObj.forEach(function (ele, ind) {
            if (name == ele.name) {
                stu = ele
            }
        })
        console.log(stu);
        res.status(200).send(JSON.stringify(stu))
    })
})


//插入一个学生的数据
app.get('/insert', function (req, res) {
    var stu = req.query;
    var stuArr = JSON.stringify(stu);
    fs.readFile('students.txt', function (err, data) {
        var students = data.toString().trim();
        var studentsObj = JSON.parse("["+students+"]")
        console.log(students);
        var isIn = false;
        studentsObj.forEach(function (ele, ind) {
            if (stu.name == ele.name) {
                isIn = true;
            }
        })
        if (isIn == true) {
            res.status(200).send('该同学信息已存在！')
        }
        else {
            var comma = studentsObj.length > 0 ? ',' : '';
            fs.appendFile('students.txt', comma + stuArr, function (err, data) {
                if (err) {
                    res.status(200).send('不好意思，录入失败！')
                }
                else {
                    res.status(200).send('信息录入成功！')
                }
              console.log(stuArr);
              res.status(200).send(JSON.stringify(stuArr));
            })
        }
    })
})

app.listen(3000, function (req, res) {
    console.log('亲爱哒，服务器正常启动！')
})