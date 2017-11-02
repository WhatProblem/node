var http = require("http");
var fs = require("fs");

var server = http.createServer(function (req, res) {
    //去掉小图标
    if (req.url == "/favicon.ico") {
        return;
    }
    // res.writeHead(200, { "Content-Type": "text/html;charset=UTF-8" });
    var wenjianjia = [];
    fs.readdir("./album", function (err, data) {
        //data是数组，表示ablum中的所有文件
        console.log(data);
        for (var i = 0; i < data.length; i++) {
            var theDataName = data[i];
            fs.stat("./album/" + theDataName, function (err, states) {
                if (states.isDirectory()) {
                    wenjianjia.push(theDataName);
                }
            })
        }
        console.log(wenjianjia);
    });
    res.end();
}).listen("2000", "127.0.0.1");