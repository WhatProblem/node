// 1## 简单工厂模式
// function creatBlog(name, url) {
//     var o = new Object();
//     o.name = name;
//     o.url = url;
//     o.sayUrl = function () {
//         console.log(this.url);
//     }
//     return o;
// }
// var blog = creatBlog('test', 'www.baidu.com');
// blog.sayUrl();


// 2## 构造函数模式--私有函数方式
// function CreatePop(type, text) {
//     this.content = text;
//     this.show = function () {
//         console.log(this.content);
//     };
// }
// var nameAlert = new CreatePop('alert', '请输入姓名！');
// nameAlert.show();


// 3## 构造函数模式--防止函数多次创建
// function CreatePop(type, text) {
//     this.content = text;
//     this.show = show;
// }
// function show() {
//     console.log(this.content);
// }
// var pop1 = new CreatePop('alert', '请输入姓名1！');
// pop1.show();
// var pop2 = new CreatePop('alert', '请输入姓名2！');
// pop2.show();


// 4## 原型模式
// function Blog() { }
// Blog.prototype.name = 'test';
// Blog.prototype.url = 'www.baidu.com';
// Blog.prototype.friend = ['fr1', 'fr2', 'fr3', 'fr4'];
// Blog.prototype.showInfo = function () {
//     console.log('姓名：' + this.name + ';url地址：' + this.url + ';数组：' + this.friend);
// }
// // 测试数据1
// var blog1 = new Blog();
// blog1.showInfo();
// var blog2 = new Blog();
// blog2.showInfo();
// // 测试数据2
// blog1.name = 'blogTestName1';
// blog1.url = 'http://blog1.url';
// blog1.friend.pop();
// blog2.name = 'blogTestName2';
// blog2.url = 'http://blog2.url';
// blog2.friend.pop();
// blog1.showInfo();
// blog2.showInfo();


// 5## 或者模式（原型模式+构造函数模式）
function Blog(name, url, friend) {
    this.name = name;
    this.url = url;
    this.friend = friend;
}
Blog.prototype.showInfo = function () {
    console.log('姓名：' + this.name + ';url地址：' + this.url + ';数组：' + this.friend);
}
var blog1 = new Blog('test1', 'www.baidu.com1', ['f1', 'f2', 'f3']);
blog1.friend.pop();
blog1.showInfo();
var blog2 = new Blog('test2', 'http://www.baidu.com', ['a', 'b', 'c']);
blog2.friend.pop();
blog2.showInfo();
