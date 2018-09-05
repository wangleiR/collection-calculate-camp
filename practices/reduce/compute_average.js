'use strict';

function compute_average(collection) {
  //在这里写入代码
  let sum =  collection.reduce((acc,cur) => acc+cur);
  return sum/collection.length;
}

module.exports = compute_average;

