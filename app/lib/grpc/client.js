/*
 * @Author: dongyuxuan
 * @Date: 2017-10-25 14:33:57
 * @Last Modified by: dongyuxuan
 * @Last Modified time: 2018-01-11 11:33:55
 */
'use strict';

const grpc = require('grpc');
var path = require('path');
const eutil = require('eutil');
var config=require("../../util").config;
const PROTO_PATH = path.join(__dirname, './common.proto');
const commonProto = grpc.load(PROTO_PATH).commonPackage;

class grpcClient {
  constructor (options) {
    if (!options) options = {};
    this.oms = options.oms || {};
    if (!this.oms.token) this.oms.token = 'xxxx';
    if (!this.oms.host) this.oms.host = '127.0.0.1';
    // if (!this.oms.host) this.oms.host = '10.40.253.187';
    if (!this.oms.port) this.oms.port = 50052;//;50052
    if (eutil.isUndefined(this.oms.enableSwitch)) this.oms.enableSwitch = true;//;false
    this.omsClient = new commonProto.commonService(this.oms.host + ':' + this.oms.port, grpc.credentials.createInsecure());
  }
  invokeOMS (jsonArgs, invokeFunc) {
    if (!this.oms.enableSwitch) return Promise.resolve();
    try {
      var json = JSON.stringify(jsonArgs);
    } catch (err) {
      throw new Error('params err');
    }
    return new Promise((resolve, reject) => {
      var timeout_in_seconds = 10;
      var timeout = new Date().setSeconds(new Date().getSeconds() + timeout_in_seconds);
      this.omsClient.invoke({json, invokeFunc ,access_token: this.oms.token}, {deadline: timeout}, function(err, response) {
        if (err) {
          // ----- 此版本暂时把 4522错误当 成功处理，返回空-----
          if (err && err.code == 4522) resolve();
          // ----- 此版本暂时把 4522错误当 成功处理，返回空-----
          if (err.code && err.message) reject({code: err.code, message: err.message});
          reject(err);
        } else {
          try {
            let result = JSON.parse(response.json);
            resolve(result);
          } catch (err) {
            resolve(response.json); // 返回不是json字符串
          }
        }
      });
    });
  }
}

module.exports = new grpcClient(config.grpc.clientConfig);
