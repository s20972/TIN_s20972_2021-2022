const express = require("express");

const app = express();
app.use(express.json());
const { check, validationResult } = require('express-validator');


app.post('/9a', [check('number1').isNumeric(),
    check('number2').isNumeric()
], (req, res) => {
    console.log(req.body);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.json({ errors: errors.array() });
    }
    let number1 = parseInt(req.body.number1);
    let op = req.body.operator;
    let number2 = parseInt(req.body.number2);
    let result;
    if (op === '+') {
        result = number1 + number2;
    }  
    else if (op === '-') {
        result = number1 - number2     
    } else if (op === '/') {
        result = number1 / number2     
    } else if (op === '*') {
        result = number1 * number2     
    } else {
        result = 'enter + - / or *'
    }

    res.json({ result: result });
});
app.listen(1011);