const http = require("http")

http.createServer(function(req,res){
    res.write("Hola gentesita linda")
    res.end();
}).listen(8080)