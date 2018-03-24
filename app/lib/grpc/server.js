/*
 * @Author: dongyuxuan 
 * @Date: 2017-10-25 14:20:52 
 * @Last Modified by: dongyuxuan
 * @Last Modified time: 2018-01-11 15:34:30
 */
const grpc = require('grpc');
const path = require('path');
const config=require("../../util").config;

const botservices=require('../../services');
const authToken = require('../../auth/Token');
const util=botservices.get("util");

const PROTO_PATH = path.join(__dirname, 'common.proto');
const commonProto = grpc.load(PROTO_PATH).commonPackage;

class grpcServer {
  constructor () {
    this.config = config.grpc;
  }
  invoke (call, callback) {
    util.log.info('get grpc request:', call.request.invokeFunc);
    let access_token = call.request.access_token;
    return authToken.decodeInsideToken(access_token)
      .then(tokenDate => {
        if (!tokenDate) return Promise.reject(new Error('token验证失败'));
        let invokeFunc;
        try {
          let invokeInfo = call.request.invokeFunc.split('-');
          let invokeService = botservices.get(invokeInfo[0]);
          let invokeFuncName = invokeInfo[1];
          invokeFunc = invokeService[invokeFuncName].bind(invokeService);
          if (!(invokeFunc instanceof Function)) throw new Error();
        } catch(err) {
          callback(new Error('grpc invoke function is undefined'), null);
        }
        let args = JSON.parse(call.request.json);
        if (args instanceof Array) return invokeFunc(...args); //数组处理
        else return invokeFunc(args);
      })
      .then(result => callback(null, JSON.stringify(result)))
      .catch(err => {
        util.log.info(err);
        if (err instanceof Array) return callback(null, JSON.stringify({code: err[0], message: err[1], data: err[2]}));
        return callback(Object.assign(err, {code: 500, message: err.message, status: grpc.status.INTERNAL}));
      });
  }
  start() {
    const server = new grpc.Server();
    server.addService(commonProto.commonService.service, {invoke: this.invoke.bind(this)});
    server.bind('0.0.0.0:' + this.config.port, grpc.ServerCredentials.createInsecure());
    server.start();
  }
}
  
module.exports = new grpcServer();
