/**
 * Created by Administrator on 2016/10/20.
 */
//导入express模块
var express =require("express");
var fs =require("fs");
//生成路由
var router =express.Router();
//登录
router.get('/login', function(req, res) {
	res.render("login", {
		title: "登录",
		privateJs: "login",
	})
})

router.get('/api/login', (req, res) => {
	var user = req.query;
	fs.readFile('users/user.txt', (err, data) => {
		var usersStr = data.toString().trim();
		var usersObj = JSON.parse("[" + usersStr + "]");
		var isIn = usersObj.some(function(ele, ind, arr) {
			return(user.name == ele.name && user.password == ele.password)
		})
		if(isIn) {
			res.status(200).json({
				"code": "success",
				"content": "登录成功！",
				data: user
			})
		} else {
			res.status(200).json({
				"code": "error",
				"content": "用户名或者密码不正确！"
			})
		}

	})

})
module.exports  = router;