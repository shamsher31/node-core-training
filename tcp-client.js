var net = require('net'),
		client;

client = net.connect({port: 5432});

client.on('connect', function() {
  console.log('connected to server');
});

client.on('data', function(data) {
	console.log(data.toString());
  client.end();
});

client.on('end', function() {
  console.log('disconnected from server');
});
