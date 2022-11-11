var http = require('http');
http.createServer(function(req,res){
res.write("Hi");
res.end();

}).listen(1200)