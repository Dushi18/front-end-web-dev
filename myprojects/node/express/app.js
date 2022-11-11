  const express = require('express');
  const port = 80;
  const app = express();
  const pug = require('pug');
  const path = require('path');
const { dirname } = require('path');
  
  app.use('/static', express.static('static'));

  app.set('view engine', 'pug');
  app.set('views', path.join(__dirname,'template'));

  app.get('/dushi', (req,res)=>{
    res.render('dushi');
  })
  
  app.get('/', (req, res)=> {
      res.send(`This is my first express app strating on port ${port}`);
  });
  app.post('/about', (req, res)=> {
    res.send(`This is my first about express app strating on port ${port}`);
})
   app.get('/error', (req, res)=>{
     res.status(404).send('Error 404 not found');
   })

  app.listen(port, ()=>{
      console.log("Listening on port 80")
  })