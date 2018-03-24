// const grpc = require('grpc');
// var path = require('path');
// var config=require("../../util").config;
// const PROTO_PATH = path.join(__dirname, './common.proto');
// const commonProto = grpc.load(PROTO_PATH).commonPackage;
// // 调用方法为 @服务名-@方法名 数组传递参数
const grpcClient = require('./client');

let invokeFunc = 'GoodsService-updateGoodsAttributes';
let argsList = [
  [{
    page_url: -1
  }, 27],
  [{
    page_url: -1
  }, 28],
  [{
    page_url: -1
  }, 29]
];
argsList.forEach(args => grpcClient.invokeOMS(args, invokeFunc).catch(err => console.log(err)));
