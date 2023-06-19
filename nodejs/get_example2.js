var express = require('express');
var app = express();

var path = require("path");

app.use(express.static(path.join(_dirname, 'public')));

app.get('/get_example2', function(req, res){
    res.send('<p>UserName: '+req.query['first_name'] + '</p><p>LastName' + req.query['last_name']);
});

var server = app.listen(9000, function(){
    var host = " 192.168.137.110";
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port);
})