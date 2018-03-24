/**
 * Created by Bo on 2017/10/17.
 */
'use strict';
const eutil=require("eutil");

function version(type) {
  this.type = type || 1;
  this.typename = this.type == 1 ? "Android" : "IOS";
  this.tip = '请更新';
  this.tip_en = 'please update';
  this.url = '';
  this.version = '0.0.0';
  this.isMandatory = false;
  this.ctime = eutil.getTimeSeconds();
  this.mtime = eutil.getTimeSeconds();
}

function addVersion(data) {
  this.type = data.type;
  this.typename = this.type == 1 ? "Android" : "IOS";
  this.tip = data.tip || '请更新';
  this.tip_en = data.tip_en || data.tip || 'please update';
  this.url = data.url || '';
  this.version = data.version || '0.0.0';
  this.isMandatory = data.isMandatory || false;
  this.ctime = eutil.getTimeSeconds();
  this.mtime = eutil.getTimeSeconds();
}

function updateVersion(v, data) {
  this.type = data.type || v.type;
  this.typename = this.type == 1 ? "Android" : "IOS";
  this.tip = data.tip || v.tip || '请更新';
  this.tip_en = data.tip_en || v.tip_en || 'please update';
  this.url = data.url || v.url || '';
  this.version = data.version || v.version || '0.0.0';
  this.isMandatory = data.isMandatory || v.isMandatory || false;
  this.ctime = v.ctime || eutil.getTimeSeconds();
  this.mtime = eutil.getTimeSeconds();
}

module.exports = {
  version: version,
  addVersion: addVersion,
  updateVersion: updateVersion
};
