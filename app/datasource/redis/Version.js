/**
 * Created by Bo on 2017/10/17.
 */

class redisVersionModel{
  constructor(wclient,rclient){
    this.wclient=wclient;
    this.rclient=rclient;
  }
  
  getVersion(type, version) {
    return this.rclient.hget('version', type + '_' + version)
      .then(res => {
        if (res) return JSON.parse(res);
        else return null;
      });
  }
  
  getAllVersion() {
    return this.rclient.hgetall('version')
      .then(res => {
        if (res) return res;
        else return null;
      });
  }
  
  addVersion(v, version) {
    return this.rclient.hset('version', version.type + '_' + v, JSON.stringify(version));
  }
  
  delVersion(type, version) {
    return this.rclient.hdel('version', type + '_' + version);
  }
  
  getStarVersion(type, version) {
    return this.rclient.hget('starVersion', type + '_' + version)
      .then(res => {
        if (res) return JSON.parse(res);
        else return null;
      });
  }
  
  getAllStarVersion() {
    return this.rclient.hgetall('starVersion')
      .then(res => {
        if (res) return res;
        else return null;
      });
  }
  
  addStarVersion(v, version) {
    return this.rclient.hset('starVersion', version.type + '_' + v, JSON.stringify(version));
  }
  
  delStarVersion(type, version) {
    return this.rclient.hdel('starVersion', type + '_' + version);
  }
  
}

module.exports = redisVersionModel;
