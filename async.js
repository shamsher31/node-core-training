var async = require('async'),
		fs = require('fs');

function One(cb) {
	return fs.readFile('file.js', cb);
}

function Two(cb) {
	return fs.readFile('file.js', cb);
}

function Three(cb) {
	return fs.readFile('file.js', cb);
}

function SeriesExecution(cb) {
	async.series([One(), Two(), Three()], function(err, data) {
		if (err) {
			return cb(err);
		}
		cb(null, data);
	});	
}
