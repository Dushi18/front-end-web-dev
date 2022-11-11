const http  = require('http');
const fs = require('fs');

const filecontent = fs.readFileSync('colorscss.html');

const server = http.createServer((req, res) =>{
    res.writeHead(200, {'Content-type' : 'text/html'});
    res.end(filecontent);

})
server.listen(8001, '127.0.0.2', ()=>{
    console.log('Listening on 8001');
})