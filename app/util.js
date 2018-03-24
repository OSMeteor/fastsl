'use strict';

const bunyan = require('bunyan');
const Joi= require("joi");
var path = require('path');
var  eutil=require("eutil");
let config=require("../package.json");
var appConfig=require("./config/config.development");
if(process.env.NODE_ENV=="development")  appConfig=require("./config/config.development");
if(process.env.NODE_ENV=="production")  appConfig=require("./config/config.production");
if(process.env.NODE_ENV=="staging")  appConfig=require("./config/config.staging");
if(process.env.NODE_ENV=="live")  appConfig=require("./config/config.live");
var Register = require('file-register');
let lib=new Register().register(path.join(__dirname,"lib"));
let log=bunyan.createLogger({name: config.name,src: true, level: 'debug'});

if(process.env.NODE_ENV=="development")  log=bunyan.createLogger({name: config.name,src: true, level: 'debug',
    streams: [
      {level: 'info', stream: process.stdout},
      {level: 'info', path: path.join(__dirname,'..','log','development_info.log')}
      ,{  level: 'warn', path: path.join(__dirname,'..','log','development_warn.log')  }
      ,{  level: 'error', path: path.join(__dirname,'..','log','development_error.log') }
      ,{  level: 'fatal', path: path.join(__dirname,'..','log','development_fatal.log') }
    ]
});
if(process.env.NODE_ENV=="production")  bunyan.createLogger({name: config.name,src: true, level: 'warn',
  streams: [
    {  level: 'warn',   stream: process.stdout },
    {  level: 'warn', path: path.join(__dirname,'..','log','production_warn.log')  }
    ,{  level: 'error', path: path.join(__dirname,'..','log','production_error.log') }
    ,{  level: 'fatal', path: path.join(__dirname,'..','log','production_fatal.log') }
  ]
});
if(process.env.NODE_ENV=="staging")  bunyan.createLogger({name: config.name,src: true, level: 'warn',
  streams: [
    {  level: 'info',   stream: process.stdout },
     {level: 'info', path: path.join(__dirname,'..','log','staging_info.log')}
    ,{  level: 'warn', path: path.join(__dirname,'..','log','staging_warn.log')  }
    ,{  level: 'error', path: path.join(__dirname,'..','log','staging_error.log') }
    ,{  level: 'fatal', path: path.join(__dirname,'..','log','staging_fatal.log') }
  ]
});

class util{
  constructor(){
    this.config=appConfig;
    this.appName=config.name;
    this.eutil=eutil;
    this.Joi=Joi;
    this.lib=lib;
    this.log=log;
  }
  schemaValidator (schema, payload)  {
    return new Promise((resolve, reject) => {
        Joi.validate(payload, schema, (err, value) => {
        if (err) {
          if(err.details.length > 0) return resolve(err.details[0].message);
          else return resolve(null);
        }
        else return resolve(null);
  });
  });
  }
  getAccessToken(req){
    var  token=null;
    if(this.eutil.haveOwnproperty(req.query,"access_token")){
        return req.query['access_token'];
    }else if(this.eutil.haveOwnproperty(req.query,"token")){
      return req.query['token'];
    }else if(this.eutil.haveOwnproperty(req.query,"authorization")){
      return req.query['authorization'];
    }else if(this.eutil.haveOwnproperty(req.query,"auth")){
      return req.query['auth'];
    }

    if(this.eutil.haveOwnproperty(req.body,"access_token")){
      return req.body['access_token'];
    }else if(this.eutil.haveOwnproperty(req.body,"token")){
      return req.body['token'];
    }else if(this.eutil.haveOwnproperty(req.body,"authorization")){
      return req.body['authorization'];
    }else if(this.eutil.haveOwnproperty(req.body,"auth")){
      return req.body['auth'];
    }

    if(this.eutil.haveOwnproperty(req.headers,"access_token")){
      return req.headers['access_token'];
    }else if(this.eutil.haveOwnproperty(req.headers,"token")){
      return req.headers['token'];
    }else if(this.eutil.haveOwnproperty(req.headers,"authorization")){
      return req.headers['authorization'];
    }else if(this.eutil.haveOwnproperty(req.headers,"auth")){
      return req.headers['auth'];
    }else  return token;
  }
}

module.exports=new util();
