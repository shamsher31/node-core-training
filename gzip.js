var fs = require('fs'),
		zlib = require('zlib'),
		gzip = zlib.createGzip(),
		filename,
		input,
		output;
	
filename = process.argv[2];

input = fs.createReadStream(filename);
output = fs.createWriteStream(filename + '.gz');

input.pipe(gzip).pipe(output);
