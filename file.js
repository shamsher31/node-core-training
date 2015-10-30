const fs = require('fs');

function readJson(filename, cb) {
  
  fs.readFile(filename, 'utf8',function(err, data) {
    var parsed;
    
    if(err) {
      return cb(err)
    }

    try {
      parsed = JSON.parse(data);
    } catch (err) {
      return cb(err);
    }

    // First parameter will always err and second parameter
    // is always data, if there is no error pass null
    cb(null, parsed);

  });

}

function handleError(err) {
  if (err) {
    logError(err);
    return;
  }
}

function logError(err) {
  console.log(err);
}

readJson('./data.json', function(err, data) {
  handleError(err);
  console.log(data);
});