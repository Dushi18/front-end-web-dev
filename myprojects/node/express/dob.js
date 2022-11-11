const express = require('express');
const path  =  require('path');
const port  = 80;
const fs = require('fs');
const pug = require('pug');
const { urlencoded } = require('express');
const app = express();

app.use('/static', express.static('static'));
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'template'));
app.use(express.urlencoded());

app.get('/', (req,res)=>{
    const con = 'Writing variables with node';
    const params = {'title': "Google form", 'content': con};
    res.status(200).render('first.pug', params);
})

app.post('/', (req,res)=>{
    const outputname = req.body.name;
    const outputdate = req.body.date;
    const outputgender = req.body.gender;
    // console.log(outputname);
    // console.log(outputdate);
    // console.log(outputgender);
    let outputToWrite = fs.writeFileSync('output.txt', `${outputname}, ${outputgender}, was born on ${outputdate}, is a very good human.`)
    const params = {'message': 'Your credentials have been submitted'};
    res.status(200).send(params);
})

app.listen(port, ()=>{
    console.log('Listening on local port 80');
})
