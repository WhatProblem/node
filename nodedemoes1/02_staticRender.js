const http = require("http");
const fs = require("fs");

const server = http.createServer(function (req, res) {
    if (req.url == "/01") {
        fs.readFile("./01.html", function (err, data) {
            res.writeHead(200, { "Content-type": "text/html;charset=UTF-8" });
            res.end(data);
        });
    } else if (req.url == "/02") {
        fs.readFile("./02.html", function (err, data) {
            res.writeHead(200, { "Content-type": "text/html;charset=UTF-8" });
            res.end(data);
        });
    } else if (req.url == "/1.jpg") {
        fs.readFile("./1.jpg", function (err, data) {
            res.writeHead(200, { "Content-type": "image/jpg" });
            res.end(data);
        });
    } else if (req.url == "/aaa.css") {
        fs.readFile("./bbb.css", function (err, data) {
            res.writeHead(200, { "Content-type": "text/css" });
            res.end(data);
        });
    } else {
        res.writeHead(404, { "Content-type": "text/html;charset=UTF-8" });
            res.end("没有这个页面");
    }
});

server.listen(2000, "127.0.0.1");