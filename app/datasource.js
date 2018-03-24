'use strict';
var path = require('path');
var Model=require('./lib/Model');
var Register = require('file-register');
var datasource=new Register().register(path.join(__dirname,"datasource"));

var datasource_cfg=require('./datasource.cfg');

var obj=new Model();
obj.set("config",datasource_cfg.get("config"));
// obj.set("redisMaster",datasource_cfg.get("redisMaster"));
// obj.set("redisSalve",datasource_cfg.get("redisSalve"));
// obj.set("mysqlMaster",datasource_cfg.get("mysqlMaster"));
// obj.set("mysqlSalve",datasource_cfg.get("mysqlSalve"));
//
// obj.set("redisPublish", datasource_cfg.get("redisPublish"));
// obj.set("redisSubscribe", datasource_cfg.get("redisSubscribe"));

module.exports=obj;
