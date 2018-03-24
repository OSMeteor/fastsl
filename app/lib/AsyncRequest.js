/**
 * Created by osmeteor on 10/13/17.
 */
var Promise = require('bluebird');
var request = require("request");
// let _postObj={
//   type:"post", // get put patch
//   url: "/RPCs/importUser",
//   data: new newUser(userInfo,register),
//   invokecount:0,
//   timeout:0,
// };


function AsyncRequest(postObj) {
  return new Promise((resolve,reject)=>{
    if(postObj.type=="get"){
      let options = { method: 'GET',
        url: postObj.url,
        qs:postObj.data,
        timeout:postObj.timeout || 2000
      };
      request(options, function (error, response, body) {
        if (error) reject(error);
        else resolve(body);
      });
    }else
    if(postObj.type=="put"){
      let options = { method: 'PUT',
        url: postObj.url,
        timeout:postObj.timeout || 2000
      };
      request(options, function (error, response, body) {
        if (error) reject(error);
        else resolve(body);
      });
    }else
    if(postObj.type=="post"){
      let options = { method: 'POST',
        url: postObj.url,
        headers:  {  accept: 'application/json' },
        qs:postObj.qs,
        body:postObj.data,
        timeout:postObj.timeout || 2000,
        json: true };


      request(options, function (error, response, body) {
        if (error) reject(error);
        else resolve(body);
      });
    }else   if(postObj.type=="patch"){
      var options = { method: 'PATCH',
        url: postObj.url,
        headers: {  accept: 'application/json' },
        body:postObj.data,
        timeout:postObj.timeout || 2000,
        json: true };
      request(options, function (error, response, body) {
        if (error) reject(error);
        else resolve(body);
      });

    }else return resolve(null);
  });
}
module.exports =AsyncRequest;
