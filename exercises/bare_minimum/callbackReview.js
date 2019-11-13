/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  var stream = fs.createReadStream(filePath);
  var firstLine = '';
  stream.on('data', chunk => {
    firstLine += chunk;
  }).on('close', () => {
    firstLine = firstLine.slice(0, firstLine.indexOf('\n'));
    callback(null, firstLine);
  }).on('error', err => {
    callback(err);
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  request.get(url, (err, res) => {
    if (err) {
      callback(err);
    }
    if (res) {
      callback(null, res.statusCode);
    }
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode,
  pluckFirstLineFromFile
};
