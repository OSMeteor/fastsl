'use strict';

function  Index()   {
  return new Promise((resolve, reject) => {
      let result = {
        osmeteor:"https://github.com/OSMeteor/"
      };
  resolve([2000, "success", result]);
});
}
module.exports={
  Index:Index
};
