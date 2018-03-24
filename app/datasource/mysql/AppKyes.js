'use strict';
var mysql = require('knex');
class masterModel{
	constructor(wclient,rclient){
    this.wclient=wclient;
    this.rclient=rclient;
	}

  getALLAPPKeysById (id) {
    return new Promise((resolve, reject) => {
        this.rclient('appkeys').select('*').where({id: id})
        .then((res) => {
            if(res && res.length>0) resolve(res);
            else resolve(null);
          })
       .catch(err => reject(err));
  });
  }
	getUserById (id) {
		return new Promise((resolve, reject) => {
			this.rclient('appkeys').where({id: id}).select('*').limit(1)
				.then((res) => {
            if(res && res.length > 0) resolve(res[0]);
             else resolve(null);
      })
				.catch(err => reject(err));
		});
	}
  addUser (user) {
    let _self = this;
    return new Promise((resolve, reject) => {
      _self.wclient('appkeys').insert(user).then(result => {
              user.id = result[0];
             user.nickname = result[0];
             return resolve(user);
        }).catch((err) => {
          return reject(err);
        });
      });
  }

}

module.exports = masterModel;
