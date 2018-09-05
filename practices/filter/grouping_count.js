'use strict';

function grouping_count(collection) {
 //在这里写入代码

  //refactor
  var object = new Object();
  collection.forEach(key=>{
    object[key] = collection.filter(n=> n===key).length;
  });
  return object;
}
module.exports = grouping_count;
