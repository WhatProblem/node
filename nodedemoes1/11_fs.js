var http = require("http");
var fs = require("fs");

var server = http.createServer(function (req, res) {
    //去掉小图标
    if (req.url == "/favicon.ico") {
        return;
    }
    // res.writeHead(200, { "Content-Type": "text/html;charset=UTF-8" });
    fs.readdir("./album/", function (err, data) {
        var wenjianjia = [];

        (function iterator(i) {
            if (i == data.length) {
                console.log(wenjianjia);
                return;
            }
            fs.stat("./album/" + data[i], function (err, states) {
                if (states.isDirectory()) {
                    wenjianjia.push(data[i]);
                }
                iterator(i + 1);
            })
        })(0)
    });
    res.end();
}).listen("2000", "127.0.0.1");