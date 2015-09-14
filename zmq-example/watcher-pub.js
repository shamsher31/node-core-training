'use strict';

const
  fs = require('fs'),
  zmq = require('zmq');

// Create publisher endpoint
var publisher = zmq.socket('pub');

var filename = process.argv[2];

fs.watch(filename, function() {

  // send message to any subscriber
  publisher.send(JSON.stringify({
    type : 'changed',
    file: filename,
    timestamp : Date.now()
  }));

  console.log('message send to subscriber');

});

publisher.bind('tcp://*:5432', function(err) {
  console.log('Listning for zmq subscriber');
});