'use strict';

function average_to_letter(collection) {

  //在这里写入代码
  const acc = collection.reduce((acc,cur) => acc+cur,0);
  return String.fromCharCode(96 + Math.ceil(acc/collection.length))
}

module.exports = average_to_letter;

