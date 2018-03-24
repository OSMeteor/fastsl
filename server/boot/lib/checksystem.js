/**
 * Created by osmeteor on 8/16/17.
 */


module.exports = function enableAuthentication(app) {
    // console.log(app.datasources.mongodbDatasource)
  // let db=app.datasources.mongodbDatasource;
  // app.set('mongodbDatasource', db);
  // db.on('error', function(error) {
  //   console.error(error);
  // });
  // db.on('connected', function () {
  //   console.log('Mongoose connection open to ' );
  //   // cb(null)
  // });
  //
  // db.on('reconnected',function(){
  //   console.log('reconnected:');
  // });
  //
  // let dbredis=app.datasources.redisMasterDatasource;
  // // app.set('redis', );
  //  dbredis.connector._client.set("test", "111",function (err) {
  //     console.log(err);
  //  });
  // Object.keys({}).map(function(item){
  //   console.log("this."+item+"=obj."+item+";");
  // });
  // dbredis.connector._client.setex("test",99999 ,"7777",function (err) {
  //   console.log(err);
  // });
  // // dbredis.execute('setex',"aaa",-1,"sss")
  // // console.log("..",dbredis.datasources)
  // dbredis.on('ready', function () {
  //   console.log('redis ready ....' );
  //   // cb(null)
  // });
  // dbredis.on('error', function () {
  //   console.log('redis connet error ....' );
  //   // cb(null)
  // });
  // dbredis.on('reconnecting', function () {
  //   console.log('redis reconnecting error ....' );
  //   // cb(null)
  // });



};
