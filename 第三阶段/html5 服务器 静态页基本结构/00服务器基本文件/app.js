const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const fs = require('fs');
const app = express();
const cookieParser = require('cookie-parser'); 
const form = multer();
app.use(express.static('www'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('', (req, res) => {
  console.log('这是根目录');
})

app.listen(3000, () => {
  console.log('颂宋，您的服务器正常启动！');
})
