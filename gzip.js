var fs = require('fs'),
		zlib = require('zlib'),
		filename;
	
filename = process.argv[2];

fs.readFile(filename, function(err, buffer) {
	zlib.gzip(buffer, function(err, buffer) {
		fs.writeFile(filename + '.gz', buffer, function(err) {
			console.log('File successfully compressed');
		});
	});
});