'use strict';
var number_map_to_word = function(collection){
  return collection.map(num =>  String.fromCharCode(97+num -1))
};

module.exports = number_map_to_word;
