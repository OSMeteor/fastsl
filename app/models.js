'use strict';
var Register = require('file-register');
var path = require('path');
module.exports=new Register().register(path.join(__dirname,"models"));
