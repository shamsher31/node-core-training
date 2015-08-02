var net = require('net'),
		server;

server = net.createServer(function(sock) {
	
	sock.write('Sending data from server');

	sock.on('error', function(error) {
		if (error) {
			console.log(error);
		}
	});

	sock.on('close', function() {
		console.log('Subscriber Disconnected');
	})

});

server.listen(5432, function() {
	console.log('Listing for subscriber');
});



