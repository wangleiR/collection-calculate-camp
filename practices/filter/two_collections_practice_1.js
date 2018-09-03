'use strict';

function choose_common_elements(collection_a, collection_b) {
  //在这里写入代码
 return collection_a.filter(n =>
     collection_b.filter(i => i === n).length > 0);

}

module.exports = choose_common_elements;
