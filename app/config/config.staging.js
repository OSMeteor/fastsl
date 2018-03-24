'use strict';
module.exports = {
  "enableJpush":true,
  "grpc": {
    clientConfig: {
      oms: {
        host: '127.0.0.1',
        port: 50052,
        enableSwitch: false
      },
    },
    port: 50051
  }
};
