const express = require('express');
const app = express();
const port = 1334;

app.get('/hello', (req, res) => {
    res.send('hello world')
})

app.listen(port, () => {
    console.log('check on : http://localhost:' + port);
});