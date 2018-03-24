/**
 * Created by osmeteor on 10/21/17.
 */
const bunyan = require('bunyan');

var path = require('path');
let log=bunyan.createLogger({name: "test",src: true, level: 'fatal',
  streams: [
    {  level: 'warn',   stream: process.stdout },
    {  level: 'warn', path: path.join(__dirname,'production_warn.log')  }
    ,{  level: 'error', path: path.join(__dirname,'production_error.log') }
    ,{  level: 'fatal', path: path.join(__dirname,'production_fatal.log') }
  ]
});




log.trace("trace")
log.debug("debug")
log.info("info")
log.warn({lang: 'fr'}, 'au revoir');
log.error("error");
log.fatal("fatal")

