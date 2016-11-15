/**
 * Created by Administrator on 2016/11/7.
 */

function router(pathname,response) {
    var pathname = pathname;
    if (pathname == '/login') {
        response.end('我要登录')
    } else if (pathname == '/admin') {
        response.end('我要访问后台')
    } else {
         response.writeHead(200,{'Content-type':'text/plain'});
        response.end('服务器启动成功！')
    }
}

module.exports = router;