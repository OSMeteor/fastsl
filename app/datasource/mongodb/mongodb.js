'use strict';
var mongoose = require('mongoose');
var Promise = require("bluebird");
mongoose.Promise=Promise;
//var autoIncrement= require('mongoose-auto-increment');
//var Promise = mongoose.Promise;
Promise.promisifyAll(mongoose);
var configData=require('../../config.json').DB.MongoDB;
var opts = {
    "server":
    {"native_parser":true,"poolSize":5,"auto_reconnect": true,"socketOptions":{"keepAlive":1},"reconnectTries":30,"haInterval":1000 },
    "db":{"native_parser":true,"strategy": "ping","readPreference":"primaryPreferred","bufferMaxEntries":5},
    "replset":
    {"rs_name":"pictureWorks","readPreference":"primaryPreferred","strategy":"ping","poolSize":5,"connectWithNoPrimary":true,"haInterval":1000
    },
    user: configData.user, pass: configData.pass
};
var connectStr="mongodb://"+configData.host+":"+configData.arbport+","+configData.host+":"+configData.port+","+configData.host+":"+configData.bport+"/"+configData.dbName;

var db = mongoose.createConnection(connectStr,opts,function(err){
    if (err) {
        console.warn('can not connect',err);
        console.warn(err);
    } else {
        console.log('connect .. host:'+connectStr);
    }
});
db.on('error', function(error) {
    db.close();
    console.error(error);
});
db.on('reconnected',function(){
    console.log('reconnected:'+connectStr);
});


//console.log(mongoose)


//db.on('error', function(error) {
//    db.close();
//    console.error(error);
//});
//db.on('reconnected',function(){
//    console.log('reconnected:'+connectStr)
//});


//mongoose.createConnection(connectStr,opts).then(function(err){
//    console.log('...');
//});
//var db = mongoose.createConnection(connectStr,opts,function(err){
//    if (err) {
//        console.warn('can not connect',err);
//        console.warn(err);
//    } else {
//        console.log('connect .. host:'+connectStr);
//    }
//});
//db.on('error', function(error) {
//    db.close();
//    console.error(error);
//});
//db.on('reconnected',function(){
//    console.log('reconnected:'+connectStr)
//});
module.exports= db;
