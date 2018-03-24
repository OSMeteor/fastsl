'use strict';
class Model{
  constructor(){
    this.models = {};
  }
  set  (name, model)  {
    this.models[name] = model;
  }
  get  (name) {
    if (this.models[name] === undefined) throw new Error('model '+name+' not found');
    return this.models[name];
  }
  list () {return  Object.assign({}, this.models);}
  clear  () {this.models = {};}
}

module.exports=Model;
