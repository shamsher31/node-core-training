var mqtt = require('mqtt'),
    client;

client = mqtt.createClient('8090', 'localhost');

client.subscribe('mypacket');
console.log('client publishing');

client.publish('mypacket', 'Client 2 is sending packet', new Date());
client.end();
