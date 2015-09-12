var net = require('net'),
		server;

server = net.createServer(function(sock) {
	
	sock.on('error', function(error) {
		if (error) {
			console.log(error);
		}
	});

	sock.on('close', function() {
		console.log('Subscriber Disconnected');
	});

	sock.write('This data is send from a server');

	sock.pipe(sock);

});

server.listen(5432, function() {
	console.log('Listing for subscriber');
});



