var net = require('net'),
		client;

client = net.connect({port: 5432});

client.on('data', function(data) {
	console.log(data.toString());
});
