const http = require('http');

http.createServer((req, resp) => {
    resp.write("Hello This is archit");
    resp.end();
}).listen(4500);