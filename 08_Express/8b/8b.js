const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 2334;
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/form', (req, res) => {
    res.sendFile(__dirname + '/8b.html');
})

app.get('/formdata', (req, res) => {
    var user = req.body;
    res.end(JSON.stringify(user));
})

app.listen(port, () => {
    console.log('fill the form on http://localhost:' + port + '/form');
})