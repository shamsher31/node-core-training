'use strict';

const
  zmq = require('zmq');

// create subscriber endpoint
var subscriber = zmq.socket('sub');

// subscribe to all messages
subscriber.subscribe("");

subscriber.on("message", function(data) {
  
  // parse data sent from publisher
  var 
    message = JSON.parse(data),
    date = new Date(message.timestamp);

  console.log('message recived from publisher');
  console.log('File '+ message.file + ' changed at ' + date);

});

console.log("waiting for message");

// connect to publisher on port 5432
subscriber.connect("tcp://localhost:5432");