var url = require("url");
var adr = "http://localhost:8080/default.htm?year=2018&&month=march";

// Parse the address 
var q = url.parse(adr, true);