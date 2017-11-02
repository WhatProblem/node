var http = require('http');

var server = http.createServer(function(req,res){
    res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
    res.end("我的第一个node服务器" + ( 1 + 2 + 3 ) + "测试")
});
server.listen(2000,"127.0.0.1");