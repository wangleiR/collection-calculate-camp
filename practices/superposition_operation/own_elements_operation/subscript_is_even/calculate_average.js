'use strict';
var calculate_average = function(collection){

  const len = collection.filter(n => n%2 === 0).length;
  const acc = collection.filter(n => n%2 === 0).reduce((a,c) => a+c,0);
  return acc/len;
};
module.exports = calculate_average;
