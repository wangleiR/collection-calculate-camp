'use strict';

function average_uneven(collection) {

  //在这里写入代码
  const acc = collection.filter(num => num%2 === 1).reduce((acc,cur)=>acc+cur,0);
  const len = collection.filter(num => num%2 === 1).length;
  return acc/len
}

module.exports = average_uneven;
