var http = require("http");
var fs = require("fs");

var server = http.createServer(function (req, res) {
    //去掉小图标
    if (req.url == "/favicon.ico") {
        return;
    }
    // res.writeHead(200, { "Content-Type": "text/html;charset=UTF-8" });
    //检测状态
    fs.stat("./album/aaa", function (err, data) {
        //检测是否是文件夹
        console.log(data.isDirectory());
    });
    res.end();
}).listen("2000", "127.0.0.1");