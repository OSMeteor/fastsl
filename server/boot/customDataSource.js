'use strict';
/**
 * Created by osmeteor on 8/20/17.
 */
var boot=require('../../app/boot');
module.exports = function enableAuthentication(app,cb) {
      boot(app,function () {
           cb(null);
      });
};
