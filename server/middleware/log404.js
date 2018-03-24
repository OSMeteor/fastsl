// /**
//  * Created by osmeteor on 8/17/17.
//  */
// "loopback#urlNotFound": {}
module.exports =function urlNotFound() {
  return function raiseUrlNotFoundError(req, res, next) {
    console.log('Cannot ' + req.method + ' ' + req.url);
    next();
  };
}
