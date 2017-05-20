var express = require('express');
var app = express();

app.use(express.static('sw'));

app.listen(8888,function (err) {
   if (!err){
       console.log('server is running at port 8888');
   }
});
