'use strict';

function get_integer_interval(number_a, number_b) {
  //在这里写入代码
  if (number_a <= number_b)
    return[...Array(Math.abs(number_b-number_a)+1).keys()].map(num => num+number_a);
  else
    return[...Array(Math.abs(number_b-number_a)+1).keys()].map(num => number_a-num);

}

module.exports = get_integer_interval;

