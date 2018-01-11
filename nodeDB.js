'use strict';
var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
// var db = require('./model/db.js');

// 跨域配置
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

function connectDB(callback) {
    var url = 'mongodb://localhost:27017/demo1'; // 数据库地址
    MongoClient.connect(url, function (err, db) { // 连接数据库
        if (err) {
            console.log('数据库连接失败');
            return;
        }
        console.log('数据库连接成功');
        callback(err, db);
    });
}


// 插入数据
app.get('/add', function (req, res) {
    connectDB(function (err, db) {
        // 插入数据操作
        var whereData = {
            'name': 'xiaoxing',
            'age': parseInt(Math.random() * 100 + 10),
            'sex': 'man'
        };
        db.collection('student').insertOne(whereData, function (err, result) {
            if (err) {
                console.log('插入失败');
                return;
            }
            console.log('插入数据成功！！！');
            res.send('result:' + result);
            db.close();
        });
    });
})

// 删除数据
app.get('/delete', function (req, res) {
    connectDB(function (err, db) {
        // 删除操作
        var whereData = { 'name': 'xiaoli' };
        db.collection('student').remove(whereData, function (err, result) {
            if (err) {
                console.log('删除失败');
                return;
            } else {
                console.log('result:' + result);
            }
            console.log('删除数据成功');
            res.send('result:' + result);
            db.close();
        });
    });
})

// 修改数据
app.get('/favOrnot', function (req, res) {
    var judge = req['query']['fav'];
    console.log(judge);
    connectDB(function (err, db) {
        // 修改操作
        var whereData = { 'name': '标题1' }
        var updateData = { $set: { 'fav': String(judge) } };
        db.collection('listOne').update(whereData, updateData, function (err, result) {
            console.log('执行1');
            if (err) {
                console.log('err:' + err);
            } else {
                console.log(result);
            }
            console.log('修改数据成功');
            res.send(result);
            db.close();
        });
    });
})

// 查找数据
app.get('/find', function (req, res) {
    connectDB(function (err, db) {
        // 查找操作
        var whereStr = { "name": '标题1' };
        db.collection('listOne').find(whereStr, function (err, result) {
            var arrs = [];
            console.log('result:' + result);
            result.each(function (err, doc) {
                if (doc) {
                    console.log(doc);
                    arrs.push(doc);
                }
            });
            setTimeout(() => {
                res.send(arrs);
                console.log('查找数据成功');
                db.close();
            }, 3000);
        });
    });
})


app.listen(3000, function () {
    console.log('服务监听成功!!!');
});
