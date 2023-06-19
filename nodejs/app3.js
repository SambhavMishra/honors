const { log } = require('console');
const http = require('http');

const hostname = '192.168.137.110';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Good Afternoon');
})
server.listen(port, hostname, () => {
    console.log('Servers started on port ' + port);
})
