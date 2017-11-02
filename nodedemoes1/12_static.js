var http = require("http");
var url = require("url");
var fs = require("fs");
var path = require("path");

var server = http.createServer(function (req, res) {
    //去掉小图标
    if (req.url == "/favicon.ico") {
        return;
    }
    // res.writeHead(200, { "Content-Type": "text/html;charset=UTF-8" });
    var pathname = url.parse(req.url).pathname;
    //创建扩展名
    var extname = path.extname(pathname);
    console.log(extname);
    if (pathname == "/") {
        pathname = "index.html";
    }
    fs.readFile("./static/" + pathname, function (err, data) {
        if (err) {
            //如果文件不存在输出404错误
            fs.readFile("./static/404.html", function (err, data) {
                res.writeHead(404, { "Content-Type": "text/html;charset=UTF-8" });
                res.end(data);
            });
            return;
        }
        var mime=getMime(extname);
        res.writeHead(200,{ "Content-Type": mime });
        res.end(data);
    });
}).listen("2000", "127.0.0.1");


function getMime(extname){
    switch(extname){
        case ".html":
        return "text/html";
        break;
        case ".jpg":
        return "image/jpg";
        break;
        case ".css":
        return "text/css";
        break;
    }
}