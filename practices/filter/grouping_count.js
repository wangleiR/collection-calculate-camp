'use strict';

function grouping_count(collection) {
 //在这里写入代码
  var object = new Object();
  collection.forEach(index=>{
    object[index] = collection.filter(n=> n===index).length;
  });
  return object;
}
module.exports = grouping_count;
