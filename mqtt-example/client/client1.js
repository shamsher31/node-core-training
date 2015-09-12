var mqtt = require('mqtt'),
    client;

client = mqtt.createClient('8090', 'localhost');

client.subscribe('mypacket');

client.on('message', function(topic, message) {
  console.log(message.toString());
});

console.log('client started');
