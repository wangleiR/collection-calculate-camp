'use strict';

function median_to_letter(collection) {

  //在这里写入代码

  let middle = collection[Math.ceil(collection.length/2)];

    let str = "";
    while(middle%26 >= 1){
      if (middle > 26)
        str += String.fromCharCode(97);
      else
        str += String.fromCharCode(97+middle-1);
      middle = middle-26;
    }
    return str;
}

module.exports = median_to_letter;
