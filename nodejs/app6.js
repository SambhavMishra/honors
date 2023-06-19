var http = require('http');

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Good Morning');
    res.end();
    
    // res.writeHead(200, {
    //     'Content-Type': 'text/html' 
    // })
    // .end('Good Morning');
}).listen(8000)