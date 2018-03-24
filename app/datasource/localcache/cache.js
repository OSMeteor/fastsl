'use strict';
const NodeCache = require( "node-cache" );
class localCacheModel{
  constructor(){
    this.client=new NodeCache();
  }
}
module.exports = localCacheModel;
