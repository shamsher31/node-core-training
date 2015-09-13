'use strict';

const EventEmitter = require('events').EventEmitter,
      util = require('util');

// Decalre function which will increment number
var Incrementor = function (num) {
  // use num pass in args to set count
  this.count = num;
}

// Create custome event emitter by inheriting events class
util.inherits(Incrementor, EventEmitter);

// Add methods to function prototype so that you can send events
Incrementor.prototype.increment = function() {
  var self = this;

  // display and increment value after certain interval
  setInterval(function() {
    
    // check number is even
    if (self.count % 2 ===0) {
      self.emit('even');
    }

    // Increment count
    self.count++; 

  }, 500);

}

// create new object 
var rise = new Incrementor(1);

// listen on events
rise
  .on('even', function() {
    console.log('Number is even : '+ this.count);
  })
  .increment();