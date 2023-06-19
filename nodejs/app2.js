var http = require('http');

http.createServer(function(req, res) {
    res.writeHead(301, 
        {Location: 'http://www.rknec.edu'})
        .end();
}).listen(8001);