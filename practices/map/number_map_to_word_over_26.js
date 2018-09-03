'use strict';
var number_map_to_word_over_26 = function(collection){
  return collection.map(num =>  {
    let str = "";
    while(num%26 >= 1){
      if (num > 26)
        str += String.fromCharCode(97);
      else
        str += String.fromCharCode(97+num-1);
      num = num-26;
    }
    return str;
  })
};
module.exports = number_map_to_word_over_26;
