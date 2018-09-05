'use strict';

function even_to_letter(collection) {

  //在这里写入代码
  return collection.filter(num => num%2 === 0).map(num => String.fromCharCode(96+num));
}

module.exports = even_to_letter;
