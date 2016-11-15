//引入mongoose模块包
const mongoose = require("mongoose")
//获取当前数据库的连接
const db = mongoose.connection;
//连接到那个数据库
//mongodb连接mongoDB数据库的专用协议
//localhost数据库的所在主机  ip地址也可以
//h5指定哪个数据库
mongoose.connect("mongodb://localhost/h5")

//监听数据库连接事件
db.on("error", (err) => {
	console.error("数据库连接失败", err);
})

db.on("open", () => {
	console.log("打开数据库成功！");
})

// mongoose.mode创建一个数据模型  创建一个数据模型(返回的结果:类、构造函数)
//参数1：模型的名称,也就是数据库中集合的名称
//参数2：模型的模式 Schema,用来描述数据的形状 即数据有哪些属性，属性的类型 
//另外还可以有属性的默认值 属性的验证等
//mongoose为mongoDB增加了很多很强大的功能  通过new运算符创建对象
// 增、删、改、查
const Students = mongoose.model("students", {
	name: String,
	isMale: Boolean,
	age: Number,
	phone: Number,
	email: String,
	info: String
});
// 增加 学生信息
var student = ({
    name: "宋典花",
    isMale: false,
	age: 23,
    phone: 15738395076,
    email: "1594996575 @qq.com",
    info: "我是H5 - 11 期的一名学员 "
})
var students = [{ name: "聂保恩", isMale: true, age: 20, phone: 15738395366, email: "347195213@qq.com", info: "我是一名学生" },
	{ name: "罗雪峰", isMale: true, age: 22, phone: 15560119392, email: "570942305@qq.com", info: "我是大学生" },
	{ name: "乔仕行", isMale: true, age: 23, phone: 15738861932, email: "862905410@qq.com", info: "我是一名学生 " },
	{ name: "买文博", isMale: true, age: 24, phone: 18538526001, email: "mai852852@126.com", info: "目前正在学习HTML、JavaScript、AJAX、NodeJs" },
	{ name: "张旭东", isMale: true, age: 25, phone: 13245678910, email: "123456@qq.com", info: "我是一名学生" },
	{ name: "李建防", isMale: true, age: 26, phone: 13273815537, email: "2327283952@qq.com", info: "我是一名html学生" },
	{ name: "孙詩詠", isMale: true, age: 27, phone: 15738848431, email: "740174191@qq.com", info: "我是一名H5学生" },
	{ name: "卢鹏程", isMale: true, age: 28, phone: 15737178208, email: "1120336291@qq.com", info: "我是一名攻城狮" },
	{ name: "晏敬文", isMale: false, age: 17, phone: 15518871152, email: "1466584959@qq.com", info: "理工科大学生" },
	{ name: "王志超", isMale: true, age: 20, phone: 15136209171, email: "1343957918@qq.com", info: "超哥 " },
	{ name: "宋典花", isMale: false, age: 23, phone: 15738395076, email: "1594996575 @qq.com", info: "我是H5 - 11 期的一名学员 " },
	{ name: "刘晓伟", isMale: true, age: 20, phone: 15638178917, email: "934002570 @qq.com", info: "我是一名攻城狮 " }]

students.forEach(function (student) {
	new Students(student).save((err) => {
		if (err) {
			console.log(`写入${student.name}数据失败！`)
		} else {
			console.log(`写入${student.name}数据成功！`)
		}
	})

})




























