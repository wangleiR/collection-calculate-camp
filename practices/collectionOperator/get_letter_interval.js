'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码

  let arr = new Array(Math.abs(number_b-number_a)+1);

  for (let i = 0; i < arr.length; i++){
    arr.fill(String.fromCharCode(97+number_a -1),i,i+1);
    if (number_a < number_b)
      number_a++;
    else
      number_a--;
  }
  return arr;
}

module.exports = get_letter_interval;
