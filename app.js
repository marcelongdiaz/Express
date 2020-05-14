const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
var ejs = require('ejs');

app.use(express.static(__dirname + '/public'));
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.get('/home', (req, res) => {
    res.render('partials/home');
});
app.get('/:page', (req, res) =>{
  res.render('partials/'+req.params.page);
})
app.use(function(req, res, next){
    res.status(404);
  
    // respond with html page
    if (req.accepts('html')) {
      res.render('partials/404', { url: req.url });
      return;
    }
  
    // respond with json
    if (req.accepts('json')) {
      res.send({ error: 'Not found' });
      return;
    }
  
    // default to plain-text. send()
    res.type('txt').send('Not found');
  });
console.log(__dirname)

// app.use(function (req, res, next) {
//     res.status(404).send( ejs.renderFile(__dirname + 's/index.ejs', function(err, data) {
//         console.log(err || data);
// }))});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))