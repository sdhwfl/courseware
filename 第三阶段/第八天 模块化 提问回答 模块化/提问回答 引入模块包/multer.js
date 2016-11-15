
var multer = require('multer');

//上传照片
var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'www/uploads');
    },
    filename: function(req, file, cb) {
        //在req
        req.file = file;
        var name = req.cookies.name;
        //console.log(file)
        //cb第二个参数:上传到服务器上面的目录
        if(file.mimetype == "image/jpeg") {
            var extension = ".jpg"
        } else if(file.mimetype == "image/png") {
            var extension = ".png"
        } else if(file.mimetype == "image/gif") {
            var extension = ".gif"
        }
        cb(null, name + extension)

    }
})

//执行一下
var upload = multer({
    storage: storage
})

module.exports = upload;