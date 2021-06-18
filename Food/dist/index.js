var http = require('http'),
    fs = require('fs');

/* Creating server */
var server = http.createServer(function (request, response) {
    if (request.url == '/' || request.url == '/dist/index.html') {
        var fileStream = fs.createReadStream('./index.html');

        fileStream.pipe(response);
    } else {
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.end("Hello World\n");
    }
});

/*Start listening*/
server.listen(5000, 'localhost');