'use strict';
var Register = require('file-register');

var bunyan = require('bunyan');
var path =require('path');
var wordfilter = require('wordfilter');

module.exports={
  controllers:new Register().register(path.join(__dirname,"controllers"))
};
