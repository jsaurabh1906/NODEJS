var http = require('http');
//THIS IS CODE OF NODE JS//
var onReceive =  function(req,res)
{
    res.write("<h1> online shopping web site</h1>");
    res.write("<hr/>");
    res.write("<ol>"+"<li>food</li>"+"<li>car</li>"+"<li>mobile</li"+"<li>laptop</li>");
    res.end();
}
var server =http.createServer(onReceive);
server.listen(9000);
console.log("Server is listening on port 900");
