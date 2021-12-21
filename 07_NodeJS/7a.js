const http = require('http');

const url = require('url');
http.createServer((req, res) => {

    res.write("Please provide data in the format : http://localhost:9999/?operator=...&num1=...&num2=...");



    const queryObject = url.parse(req.url, true).query;
    var operator = queryObject.operator;
    var num1 = parseInt(queryObject.num1);
    var num2 = parseInt(queryObject.num2);

    var result = null;
    if (num1 && num2 && operator) {
        if (operator === "add") {
            result = num1 + num2;
            res.end("\n result is: " + String(result));
        }
        if (operator === "sub") {
            result = num1 - num2;
            res.end("\n result is: " + String(result));
        }
        if (operator === "mul") {
            result = num1 * num2;
            res.end("\n result is: " + String(result));
        }
        if (operator === "div") {
            result = num1 / num2;
            res.end("\n result is: " + String(result));
        }
    } else {
        res.end("\n something is wrong with url please follow the format presented above");
    }
}).listen(9999);