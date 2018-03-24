
'use strict';

var datasource = require('./datasource');
var util = require('./util');
// let Extract = util.lib.jpush;//require("./lib/jpush/index");
// let _Extract=new Extract();
// let grpcExtract = util.lib.grpc.server;//require('./lib/grpc/server');
// let SequenceId = util.lib.SequenceId;//require('./lib/SequenceId');

module.exports=function (app,cb) {
      // if(util.config.enableJpush)_Extract.start();
      // grpcExtract.start();

     // console.log(app.get("appName"))
   // app.set("log",bunyan.createLogger({name: app.get("appName")}));

  //   const config=app.get("config");
  //   // 连接mysql
  //   let mysqlMaster=Apiapp.mysql.mysqlMaster;
  //   mysqlMaster.createClient(config.mysql.master);
  //   app.set("mysqlMaster",mysqlMaster);
  // // 连接redis
  //   let redisMaster=Apiapp.redis.redisMaster;
  //   redisMaster.createClient(config.redis.master);
  //   app.set("redisMaster",redisMaster);
  //   let redisSlave=Apiapp.redis.redisSlave;
  //   redisSlave.createClient(config.redis.salve);
  //   app.set("redisSlave",redisSlave);
  //
  //
  //   const adapter=Apiapp.lib.adapter(app);
  //   app.set("adapter",adapter);
  //   //  设置访问权限
  //   const auth_passport=Apiapp.auth.auth_passport(app);
  //    app.set("auth_passport",auth_passport);
  //   const verToken=Apiapp.auth.verToken(app);
  //
  //     // app.remotes().before ('/api/Consumers/login', function (ctx, next) {
  //     //   // ctx.result ={data:ctx.result};
  //     //   console.log(ctx.req.body)
  //     //   next();
  //     // });
  //
  //
  //   app.get('/api/Stars/login', auth_passport.basic());
  //



  // 敏感词
  // setInterval(function(){
  //   wordfilter.clearList();
  //   redisSlave.getSensitiveWords()
  //     .then(result=>wordfilter.addWords(result))
  //   .catch(err=>{})
  //  },60000)
  //
  // app.set("wordfilter",wordfilter);
  // auth_passport.jwt()
  //  app.get('/api/Stars/getHeadline/*', auth_passport.basic());
  // app.set("auth",redisSlave);
  // 连接 mongodb
  //  app.set("mongodb","");



     cb(null);
};
