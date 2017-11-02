var http = require("http");
var url = require("url");

var server = http.createServer(function(req,res){
    var pathname = url.parse(req.url).pathname;
    var query = url.parse(req.url,true).query;
    console.log(pathname,query.pwd);
    res.end();
}).listen("2000","127.0.0.1");