'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码

  return collection.filter(num => num%2 === 1).reduce((acc,cur) => acc+(cur*3+5),0);
}

module.exports = hybrid_operation_to_uneven;

