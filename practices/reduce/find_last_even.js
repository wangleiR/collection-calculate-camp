'use strict';

function find_last_even(collection) {
  //在这里写入代码
  let reversed = collection.reverse();
  return reversed.find(n => n%2 == 0)

}

module.exports = find_last_even;
