'use strict';

function double_to_one(collection) {
  //在这里写入代码
  let arr = [];
  collection.forEach(item => {
   if(typeof item === "number"){
     arr.push(item);
   } else if (typeof item === "object"){
      item.forEach(num => arr.push(num));
   }
 });
  return arr;

}

module.exports = double_to_one;
