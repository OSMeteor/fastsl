'use strict';
var lineReader = require('line-reader'),
  Promise = require('bluebird');
const fs = require('fs-extra');
var eachLine = Promise.promisify(lineReader.eachLine);
var map=[];
eachLine('keywords', function(line) {
    map.push(line);
}).then(function() {
  fs.outputJson("aa.json", map, err => {
    console.log(err); // => null


});

  console.log(JSON.stringify(map),'done');
}).catch(function(err) {
  console.error(err);
});
