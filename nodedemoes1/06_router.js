var http = require("http");

var server = http.createServer(function (req, res) {
    var url = req.url;
    res.writeHead(200, { "Content-Type": "text/html;charset=UTF-8" });
    console.log(url);
    if (url.substr(0, 9) == "/student/") {
        var studentId = url.substr(9);
        console.log(studentId);
        if (/$\d{10}^/.test(studentId)) {
            res.end("要查询的学生信息id：" + studentId);
        } else {
            res.end("查询学号为数不对");
        }
    } else if (url.substr(0, 9) == "/teacher/") {
        var teacherId = url.substr(9);
        if (/$\d{6}^/.test(teacherId)) {
            res.end("要查询的老师信息id：" + teacherId);
        } else {
            res.end("查询工号为数不对");
        }
    } else {
        res.end("未找到文件");
    }
}).listen("2000", "127.0.0.1");