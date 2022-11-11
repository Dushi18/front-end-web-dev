var http = require('http');
var a = 100;
var b = 25;

http.createServer (function(req, res){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    // res.write("Hi Welcome, Dushyant this side.")
    // res.write("Adding 25 and 100 results", )
    // console.log(a+b);
    // res.write(a+b)
    res.end(''
    
    )

}).listen(4000)
