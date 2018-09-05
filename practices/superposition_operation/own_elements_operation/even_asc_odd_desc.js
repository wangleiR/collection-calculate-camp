'use strict';
var even_asc_odd_desc = function(collection){

  const a = collection.filter(num => num%2 === 0).sort((a,b) => a-b);
  const b = collection.filter(num => num%2 === 1).sort((a,b) => b-a);
  return a.concat(b);

};


module.exports = even_asc_odd_desc;
