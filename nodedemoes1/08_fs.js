var http = require("http");
var fs = require("fs");

var server = http.createServer(function (req, res) {
    // res.writeHead(200, { "Content-Type": "text/html;charset=UTF-8" });
    fs.mkdir("./album/aaa");
    res.end();
}).listen("2000", "127.0.0.1");