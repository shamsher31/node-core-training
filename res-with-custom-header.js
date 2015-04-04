const http = require('http');

var server = http.createServer(resWithHeader);
server.listen(8000, function() {
	console.log('Server running and waiting for request');	
});

function resWithHeader(req, res) {
	
	console.log('I got the request');

	var body = 'NodeJs response with some custom header information';
	var contentLength = body.length;

	res.writeHead(200, {
		'Content-Type' : 'text/plain',
		'Content-Length' : contentLength
	});

	res.end(body);

}
