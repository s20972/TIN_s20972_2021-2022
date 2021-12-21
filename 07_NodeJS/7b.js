const fs = require('fs');



function printContent(dirPath) {
    fs.watch(dirPath, (eventType, filename) => {
        if (eventType === 'change') {
            fs.readFile(dirPath + filename, (error, content) => {
                if (error) {
                    console.log("error! " + error);
                }
                console.log("the file named " + filename + " was modified");
                console.log("the content of the file: " + content);
            });
        }
    })
}
const dirPath = "dir\\";
printContent(dirPath);