'use strict';
function one_add_next_multiply_three(collection){

    let arr = new Array(collection.length-1);

    collection.forEach((value, index) => {
    if (index !== collection.length-1){
      arr[index] = (value + collection[index+1]) * 3;
    }
  });
  return arr;
}
module.exports = one_add_next_multiply_three;
