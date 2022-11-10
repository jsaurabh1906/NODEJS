var http = require('http');
// this//
var onReceive =  function(req,res)
{
    res.write("<h1> Ecommerce web site</h1>");
    res.write("<hr/>");
    res.write("<ol>"+"<li>pink</li>"+"<li>red</li>"+"<li>green</li"+"<li>yellow</li>");
    res.end();
}
var server =http.createServer(onReceive);
server.listen(9000);
console.log("Server is listening on port 900");
console.log("Server is listening on port 900");
console.log("Server is listening on port 900");
console.log("Server is listening on port 900");
console.log("Server is listening on port 900");
console.log("Server is listening on port 900");console.log("Server is listening on port 900");console.log("Server is listening on port 900");console.log("Server is listening on port 900");console.log("Server is listening on port 900");console.log("Server is listening on port 900");console.log("Server is listening on port 900");console.log("Server is listening on port 900");console.log("Server is listening on port 900");
