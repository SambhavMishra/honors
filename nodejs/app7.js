// const fs = require('fs');
// const data = fs.readFileSync("abc.txt", 'utf-8');
// console.log(data);
// console.log("Blocking code");

const { log } = require("console");

// const { log } = require('console');
// const fs = require('fs');
// fs.readFile('abc.txt', 'utf-8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });
// console.log(("Non-Blocking code"));

// fs.readFile('index.html', 'utf-8', (err, data) => {
//     if(err){
//         throw err;
//     }
//     console.log(data);
// });
// console.log("Non-blocking code 2");


// Sync callback 
function greetings(callback) {
    callback();
}
greetings( () => {console.log('Hi');})
console.log("Sync callback");