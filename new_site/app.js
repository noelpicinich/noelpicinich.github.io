let http = require('http');
let url = require('url');

let server = http.createServer(function(req, res) {
let page = url.parse(req.url).pathname;
    res.writeHead(200, {"Content-Type": "text/html"});
res.end('Hi everybody!');
});

server.listen(8080);
