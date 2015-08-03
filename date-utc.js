var dateTime = require('date-time');

console.log(dateTime());
//=> 2014-01-09 06:46:01 UTC

console.log(dateTime(new Date(2015, 8, 2)));
//=> 2015-08-02 23:00:00 UTC 
