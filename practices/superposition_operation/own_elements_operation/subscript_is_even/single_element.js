'use strict';
var single_element = function(collection){

  let arr = collection.filter((element,index) => index%2 === 1 );
  let res = [];
  arr.forEach(num => {
    if (arr.indexOf(num) === arr.lastIndexOf(num)){
        res.push(num)
    }
  });
  return res;
};

var collection_a = [1, 2, 3, 2, 5, 6, 21, 43, 12, 5];
console.log(single_element(collection_a));
module.exports = single_element;
