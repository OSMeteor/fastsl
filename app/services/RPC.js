/**
 * Created by Bo on 2017/10/24.
 */

'use strict';
const Promise = require('bluebird');
const request = Promise.promisifyAll(require('request'));
const config = require('../util').config;

class RPCModel {
    updateStarToOSS(data) {
        return request.postAsync({
            url: config.RPCUrl + `Stars/updateStarInfoToApi`,
            headers: {
            },
            body: data,
            json: true,
            timeout: 2000
        }).then(res => {
            return res.body;
        });
    }



}
module.exports = RPCModel;
