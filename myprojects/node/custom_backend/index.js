const http =  require('http');
const fs = require('fs');
// const { url } = require('inspector');

const hostname = '127.0.0.1';
const port = '8001';

const home = fs.readFileSync('./home.html');
const about = fs.readFileSync('./about.html');
const contact  = fs.readFileSync('./contact.html');
const gallery = fs.readFileSync('./gallery.html');


const server = http.createServer((req, res) =>{
    console.log(req.url)
    url = req.url;
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');

    if (url =='/') {
        res.end(home); 
        
    }
    else if (url =='/home') {
        res.end(home);
    }
    
    else if(url=='/about')
    {

        res.end(about); 
    }
    else if(url=='/contact')
    {

        res.end(contact);
    }
    else if(url=='/gallery')
    {

        res.end(gallery);
    }
    else
    {
       res.statusCode  = 404;
        
        res.end('<h1>Error 404 found</h1>');  
    }
    
})
server.listen(8001, ()=>{
    // console.log("Server is listening at 8001....");
    console.log(`Server running at http://${hostname}:${port}/`);
})