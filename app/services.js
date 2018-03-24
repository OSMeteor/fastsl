'use strict';
var Register = require('file-register');
var path = require('path');
var Model=require('./lib/Model');
var services=new Register().register(path.join(__dirname,"services"));
var datasource=require('./datasource');
var util=require('./util');
var obj=new Model();
obj.set("util",util);
// obj.set("PushService",new services.Push(datasource));
// obj.set("LogService",new services.Log(datasource));
// obj.set("RPCService", new services.RPC(datasource));

module.exports=obj;
