var mosca = require('mosca'),
    settings,
    server,
    pubsubsettings;

pubsubsettings = {
  type: 'mongo',
  url: 'mongodb://localhost:27017/mqtt',
  pubsubCollection: 'pubsubCollection',
  mongo: {}
};

settings = {
  port : 8090,
  backend: pubsubsettings
};

server = new mosca.Server(settings);

server.on('ready', function() {
  console.log('Mosca server is running on port: ', settings.port);
});

server.on('clientConnected', function(client) {
  console.log('Client connected', client.id);
});

server.on('published', function(packet, client) {
  console.log('published : ', packet.payload);
});

server.on('subscribed', function(topic, client) {
  console.log('subscribed : ', topic);
});

server.on('unsubscribed', function(topic, client) {
  console.log('unsubscribed : ', topic);
});

server.on('clientDisconnected', function(client) {
  console.log('Client Disconnected', client.id);
});
