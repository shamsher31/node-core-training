/**
 * Include nodejs core HTTP module using require
 * Create server using .createServer method
 * Listen on port 8000
 * Send request using CURL as follows 
 * curl -X GET -i localhost:8000
 */
const http = require('http');

http.createServer(function(req, res) {
	
	/**
	 * When you hit the request this will
	 * be printed on node console
	 */
	console.log('I got request');

	/**
	 * This will be the output send to end client (browser or mobile) 
	 */
	res.end('My first web server in nodejs');

}).listen(8000);