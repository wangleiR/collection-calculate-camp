'use strict';

function get_integer_interval_2(number_a, number_b) {
  //在这里写入代码

  let arr = new Array(Math.abs(number_b-number_a)+1);

  for (let i = 0; i < arr.length; i++){
    arr.fill(number_a,i,i+1);
    if (number_a < number_b)
      number_a++;
    else
      number_a--;
  }

  return arr.filter(num => num%2 == 0);
}

module.exports = get_integer_interval_2;
