'use strict';
var rank_asc = function(collection){
  return collection.sort(function compare(a, b) {
    if (a > b ) {
      return -1;
    }
    if (a < b ) {
      return 1;
    }
    return 0;
  })
};

module.exports = rank_asc;
