const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
const port = 3334;
app.set('views', '/views');
app.set('view engine', 'pug');

app.get('/form', (req, res) => {
    res.sendFile(__dirname + '/views/8c.html');
})

app.post('/formdata', function(req, res) {
    res.render(__dirname + '/views/8c.pug', {
        title: '8c',
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email
    });
});
app.listen(port, () => {
    console.log('fill the form on http://localhost:' + port + '/form');
})