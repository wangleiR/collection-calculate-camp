'use strict';

function get_integer_interval(number_a, number_b) {
  //在这里写入代码
  let arr = new Array(Math.abs(number_b-number_a)+1);

  for (let i = 0; i < arr.length; i++){
      arr.fill(number_a,i,i+1);
      if (number_a < number_b)
        number_a++;
      else
        number_a--;
  }

  return arr;

}

console.log(get_integer_interval(5, 5));

module.exports = get_integer_interval;

