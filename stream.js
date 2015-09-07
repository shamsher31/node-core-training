// Read more about nodejs stream here 
// https://github.com/substack/stream-handbook

var http = require('http'),
    fs = require('fs'),
    server,
    stream;

/**
 * Stream is a continuous flow of data 
 * Streams are of following type
 * Readable, Writeable, Transform, Duplex, Classic
 * req, res are Readable and Writable streams
 */
server = http.createServer(function(req, res) {
  
  // this method creat Readable stream
  stream = fs.createReadStream( __dirname + '/README.md')
  
  /**
   * Pipe hooks src(stream) to destination(res)
   * pipe is like unix pipe which passes data
   * to the connected destination
   */
  stream.pipe(res);

});

server.listen(8000)