'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码

  if (number_a <= number_b)
    return[...Array(Math.abs(number_b-number_a)+1).keys()].map(num => String.fromCharCode(num+number_a+96));
  else
    return[...Array(Math.abs(number_b-number_a)+1).keys()].map(num => String.fromCharCode(number_a-num+96));
}

module.exports = get_letter_interval;
