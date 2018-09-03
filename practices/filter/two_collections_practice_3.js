'use strict';

function choose_divisible_integer(collection_a, collection_b) {

  //在这里写入代码

  return collection_a.filter(num => collection_b.filter(i => num%i === 0).length > 0);
}

module.exports = choose_divisible_integer;
