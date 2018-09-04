'use strict';

function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码

  let arr = new Array(Math.abs(number_b-number_a)+1);

  for (let i = 0; i < arr.length; i++){

    let str = "";
    let temp = number_a;
    while(temp > 0){
      if (temp > 26)
        str += String.fromCharCode(97+parseInt(temp/26)-1);
      else
        str += String.fromCharCode(97+temp-1);

      temp = parseInt(temp/26) > 0 ? temp-26*parseInt(temp/26): temp-26;
    }
    if (number_a === 52)
      str = 'az';
    arr.fill(str,i,i+1);

    if (number_a < number_b)
      number_a++;
    else
      number_a--;
  }
  return arr;
}

console.log(get_letter_interval_2(52, 53));

module.exports = get_letter_interval_2;

