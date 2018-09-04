'use strict';

function collect_max_number(collection) {
  //在这里写入代码
  return collection.reduce((max,cur)=>  max > cur ? max : cur);
}

module.exports = collect_max_number;
