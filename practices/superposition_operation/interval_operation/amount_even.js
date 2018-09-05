'use strict';

function amount_even(collection) {

  //在这里写入代码
  return collection.filter(num => num%2 === 0).reduce((acc,cur)=>acc+cur,0)
}

module.exports = amount_even;
