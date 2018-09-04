'use strict';

function collect_min_number(collection) {
  //在这里写入代码
  return collection.reduce((min,cur)=>  min <cur ? min : cur);
}

module.exports = collect_min_number;

