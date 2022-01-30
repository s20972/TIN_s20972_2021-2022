const temp = require('./tempConv.js');
const dist = require('./distConv.js');
document.getElementById("b1").addEventListener('click', temp.convertTemp);
document.getElementById("b2").addEventListener('click', dist.convertDist);