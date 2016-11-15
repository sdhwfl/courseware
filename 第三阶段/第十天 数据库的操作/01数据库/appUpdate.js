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
// 修改 学生信息 
// 通过id修改
// 参数1：用来寻找数据的id
// 参数2：需要替换的数据
// 参数3：回调函数
var id="58098f28b77b781738c04d67";
var student={name:"聂保恩",$inc:{age:-5}}
Students.findByIdAndUpdate(id, student,function (err) {
    if(!err){
        console.log("修改成功！")
    }
})





























