'use strict'

/**
 * Constructor function so you can add methods
 * in prototype for extensibility
 * instanceof is a guard against invocation that 
 * dont use 'new' operator
 * @param : name
 */
function Logger(name) {
  if (!(this instanceof Logger)) {
    return new Logger(name);
  }
  this.name = name;
}

Logger.prototype.log = function (msg) {
  console.log('[' + this.name +']+ ' + msg)
}

Logger.prototype.info = function (msg) {
  this.log('Info : ' + msg);
}

Logger.prototype.verbose = function (msg) {
  this.log('verbose: ' + msg);
}

module.exports = Logger;