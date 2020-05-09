const express = require('express')
const app = express()
const port = 3000
var ejs = require('ejs')

app.get('/home', (req, res) => res.send('Hello World!'))
app.use(express.static('public'));
app.use(function (req, res, next) {
    res.status(404).send( ejs.renderFile(__dirname + '/index.ejs', function(err, data) {
        console.log(err || data);
}))});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))