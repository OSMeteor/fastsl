'use strict';
global.Promise=require("bluebird");
Promise.config({
  // Enable warnings
  warnings: false,
  // Enable long stack traces
  longStackTraces: true,
  // Enable cancellation
  cancellation: true,
  // Enable monitoring
  monitoring: true
});
var loopback = require('loopback');
var boot = require('loopback-boot');
var responseTime = require('response-time');
var app = module.exports = loopback();
app.set('protocol', 'http2');
var errorHandler = require('strong-error-handler');
app.use(responseTime());
app.enable('trust proxy');
var logger = require('morgan');
if(process.env.NODE_ENV=="development") app.use(logger('dev'));
if(process.env.NODE_ENV=="production") app.use(logger('dev'));
if(process.env.NODE_ENV=="staging") app.use(logger('dev'));

app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    var baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      var explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
};
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;
  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});

app.get('remoting').errorHandler = {
    disableStackTrace: process.env.NODE_ENV === 'production',
    handler: (err, req, res, next) => {
      if (process.env.NODE_ENV === 'test') {
          return next(err);
      }
       next();
    }
};

process.on('uncaughtException', function (err) {
  try {
    var exec = require('child_process').exec;
    console.log(err);
  } catch (e) {
    console.log(e);
  }
});

process.on('CALL_AND_RETRY_LAST Allocation failed', function (err) {
  try {
    var exec = require('child_process').exec;
    console.log(err);
  } catch (e) {
    console.log(e);
  }
});

