'use strict';
var uuid = require('uuid/v1');
var _ = require('lodash');


class redisUserModel{
  constructor(wclient,rclient){
    this.wclient=wclient;
    this.rclient=rclient;
  }
  // 'appkeys'
  // 'appkeys_star'
  // setAppkeys (appkeys) {
  //   return this.wclient.hset('appkeys', appkeys.appid, JSON.stringify(appkeys));
  // }
  setAppkeysList (appLIst,key) {
    return this.wclient.hmset(key, appLIst);
  }
  // setAppkeys_starList (appLIst) {
  //   return this.wclient.hmset('appkeys_star', appLIst);
  // }
  getAppkeys(appid,key) {
    return this.rclient.hget(key, appid)
        .then(res => {
        if (res) return JSON.parse(res);
        else return null;
  });
  }
}
module.exports = redisUserModel;
