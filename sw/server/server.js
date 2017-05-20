/**
 * Created by qingyun on 2017/5/18.
 */
var http = require('http');
var fs = require('fs');
http.createServer(function (request,response) {
    var requestData = '';
   request.on('data',function (dataChunk) {
       requestData += dataChunk;
   });
   request.on('end',function () {
    console.log(requestData);
    fs.open('msg.txt','a+',function (err,fd) {
        if(!err){
            fs.appendFile('msg.txt',requestData,function (err) {
            });
            fs.close(fd);
        }
    });
   });
}).listen(8888);
console.log('服务已经启动，端口号：8888');