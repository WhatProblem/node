var http = require("http");
var fs = require("fs");

var server = http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html;charset=UTF-8" });
    fs.readFile("./test/07.txt", { "charset": "utf-8" }, function (err, data) {
        if (err) {
            throw err;
        }
        res.end(data);
    });
}).listen("2000", "127.0.0.1");