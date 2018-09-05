'use strict';
var is_exist_element = function(collection,element){

  return collection.indexOf(element) !== -1 && collection.indexOf(element)%2 === 0;
};

var collection_a = [1, 2, 3, 4, 5, 6];
console.log(is_exist_element(collection_a, 3));
module.exports = is_exist_element;
