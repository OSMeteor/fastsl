'use strict';

class masterModel {
	constructor(wclient,rclient) {
    this.wclient=wclient;
    this.rclient=rclient;
	}
	add (version) {
    return this.wclient('version').insert(version).then(result => {
      version.id = result[0];
      return version;
    });
  }
  del (id) {
    return this.wclient('version').where({id: id}).del();
  }
  updateById (updateVersion, id) {
    return this.wclient('version').where({id}).update(updateVersion);
  }
  findById (id) {
    return this.rclient('version').select().where({id}).limit(1)
      .then(result => {
        if (result && result.length === 1) return result[0];
        else return null;
      });
  }
}

module.exports = masterModel;