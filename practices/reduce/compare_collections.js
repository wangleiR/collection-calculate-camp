'use strict';

function compare_collections(collection_a, collection_b) {
  //在这里写入代码
  return collection_a.filter(num => collection_b.indexOf(num) === -1).length === 0;
}

module.exports = compare_collections;


