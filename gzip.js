var Promise = require('bluebird'),
		fs = Promise.promisifyAll(require('fs')),
		zlib = require('zlib'),
		filename;
	
filename = process.argv[2];

fs.readFileAsync(filename)
	.then(function(buffer) {
		return new Promise(function(resolve, reject) {
			return zlib.gzip(buffer, function(err, buffer) {
				resolve(buffer);
			});	
		});	
	})
	.then(function(buffer) {
		return fs.writeFileAsync(filename + '.gz', buffer);
	})
	.then(function() {
		console.log('File successfully compressed');
	})
	.catch(function(err) {
		console.log(err);
	})