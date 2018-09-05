'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
  let collection_c = collection_a.concat(collection_b);
  return Array.from(new Set(collection_c));
}

module.exports = get_union;

