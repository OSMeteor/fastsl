'use strict';
var Redis = require('ioredis');
var knex=require('knex');
var mongoose = require('mongoose');
mongoose.Promise = require("bluebird");
var path = require('path');
var config=require("./util").config;
var Model=require('./lib/Model');
var obj=new Model();
obj.set("config",config);

// 开发模式
if(process.env.NODE_ENV=="development"){
  // var mysqlMaster=knex({"client":"mysql","connection":config.mysql.master,pool:{min:3,max:10}});
  // var mysqlSalve=knex({"client":"mysql","connection":config.mysql.salve,pool:{min:3,max:10}});

  // var redisMaster=new Redis({ port: config.redis.master.port,          // Redis port
  //   host: config.redis.master.host,   // Redis host
  //   family: 4,           // 4 (IPv4) or 6 (IPv6)
  //   password: config.redis.master.password,
  //   db: 0
  // });
  // var redisSalve=new Redis({ port: config.redis.salve.port,          // Redis port
  //   host: config.redis.salve.host,   // Redis host
  //   family: 4,           // 4 (IPv4) or 6 (IPv6)
  //   password: config.redis.salve.password,
  //   db: 0
  // });
  // // 发布订阅
  // var redisPublish = new Redis({ port: config.redis.master.port,          // Redis port
  //   host: config.redis.master.host,   // Redis host
  //   family: 4,           // 4 (IPv4) or 6 (IPv6)
  //   password: config.redis.master.password,
  //   db: 15
  // });
  // var redisSubscribe = new Redis({ port: config.redis.salve.port,          // Redis port
  //   host: config.redis.salve.host,   // Redis host
  //   family: 4,           // 4 (IPv4) or 6 (IPv6)
  //   password: config.redis.salve.password,
  //   db: 15
  // });


  // var mongodbUri = "mongodb://" + config.mogodb.master.host + ":" + config.mogodb.master.port + "/" + config.mogodb.master.database;
  //
  // var mongoMaster = mongoose.connect(mongodbUri, {
  //   useMongoClient: true,
  //   user: config.mogodb.master.user,
  //   pass: config.mogodb.master.password,
  //   poolSize: 5
  // });
  // obj.set("redisMaster",redisMaster);
  // obj.set("redisSalve",redisSalve);
}
// 生产环境
if(process.env.NODE_ENV=="production"){


}
// staging
// 生产环境
if(process.env.NODE_ENV=="staging"){


}

module.exports=obj;
