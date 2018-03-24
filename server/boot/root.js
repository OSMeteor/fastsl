'use strict';


module.exports = function(server,cb) {
  // Install a `/` route that returns server status

  var router = server.loopback.Router();
  router.get('/', server.loopback.status());
  // console.log(server.get("Apiapp"));
  server.use(router);




  cb(null);


};
