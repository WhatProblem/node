var http = require("http");
var url = require("url");

var server = http.createServer(function(req,res){
    var queryObj = url.parse(req.url,true).query;
    var name = queryObj.name;
    var age = queryObj.age;
    var sex = queryObj.sex;
    console.log(name,age,sex);
    res.end("请求完成:"+name+age+age);
}).listen("2000","127.0.0.1");