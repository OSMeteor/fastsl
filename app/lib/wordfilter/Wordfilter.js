'use strict';
class Wordfilter {
  constructor (redisSubPubEventModel) {
    this.redisSubPubEventModel = redisSubPubEventModel;

    this.subscribeChannnel = 'wordfilter';
    this.redisSubPubEventModel.redisPublishEvent.on(this.subscribeChannnel, message => {
      console.log('敏感词变更');
      let blacklist = JSON.parse(message);
      this.blacklist = blacklist;
      this.regex = new RegExp(this.blacklist.join('|'), 'i');
    });
    this.redisSubPubEventModel.subscribe(this.subscribeChannnel).then(({event, count}) => {
      console.log(`subecribe channel ${this.subscribeChannnel}, count:${count}`);
    });

    this.blacklist = require('./badwords.json');
    this.regex = new RegExp(this.blacklist.join('|'), 'i');
  }
  rebuild(){
    // this.regex = new RegExp(this.blacklist.join('|'), 'i');
    return this.redisSubPubEventModel.publish(this.subscribeChannnel, JSON.stringify(this.blacklist));
  }
  blacklisted(string){
    return !!this.blacklist.length && this.regex.test(string);
  }
  addWordsList(array, fromDB){
    if (!array || !array.length) return;
    this.blacklist = this.blacklist.concat(array);
    // fromDB只修改本节点，否则通知所有节点更新
    if (fromDB) this.regex = new RegExp(this.blacklist.join('|'), 'i');
    else this.rebuild();
  }
  addWords(string){
    if(!this.blacklisted(string)) this.blacklist.push(string);
    this.rebuild();
  }
  removeWord(word){
    var index = this.blacklist.indexOf(word);
    if (index > -1) {
      this.blacklist.splice(index, 1);
      this.rebuild();
    }
  }
  updateWord (oldWord, word) {
    let needReBuild = false;
    if(!this.blacklisted(word)) {
      this.blacklist.push(word);
      needReBuild = true;
    }
    var index = this.blacklist.indexOf(oldWord);
    if (index > -1) {
      this.blacklist.splice(index, 1);
      needReBuild = true;
    }
    if (needReBuild)  this.rebuild();
  }
  clearList() {
  this.blacklist = [];
  this.rebuild();
  }
}
module.exports=Wordfilter;
