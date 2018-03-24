/**
 * Created by osmeteor on 8/20/17.
 */
var p = require('../package.json');
var version = p.version.split('.').shift();
module.exports = {
  // restApiRoot: '/api' + (version > 0 ? '/v' + version : ''),
  restApiRoot: '/api',
  // host: process.env.HOST || 'localhost',
  host: process.env.HOST || '0.0.0.0',
  port: process.env.PORT || 3001,
  appName:p.name
};

