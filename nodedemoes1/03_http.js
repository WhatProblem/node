var http = require("http");
var server = http.createServer(function(req,res){
    console.log("必须写res.end（）方法");
    res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
    res.write("<h1>这是标题</h1>");
    res.end("success");
}).listen("2000","127.0.0.1");