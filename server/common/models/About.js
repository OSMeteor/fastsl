'use strict';
var app=require('../app');
var server=app.server;
var controllers= app.controllers;
var FansLoginOBJ=server.datasources.db.define('FansLoginOBJ', {
  phonenumber: {type:String,require:true,default:"12345678901"},
  register: {type:String,require:true,default:"1a0018970a9270acf76"},
  code:{type:Number,require:true,default:"0000"}
}, {
  description: 'eeeeeeeeeeeeee',
  idInjection: false, strict: false
});

module.exports = function(About) {
    About.Index =controllers.About.Index;

    About.remoteMethod('Index', {
      description: ' 关于 [已完成]',
      http: {path: '/', verb: 'get'},
      returns: [
        {arg: 'code', type: 'number', required: true, description: '2000 success'},
        {arg: 'msg', type: 'string', required: true},
        {arg: 'result', type: 'array', required: true}
      ],
      accepts: []
    });

  };

