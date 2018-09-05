'use strict';
function rank_by_two_large_one_small(collection){
  //这里写代码。。。
  let arr = collection.sort((a,b)=>a-b);
  let res = [];
  for (let i = 0; i < arr.length-arr.length%3; i+=3) {
    res.push(arr[i+1]);
    res.push(arr[i+2]);
    res.push(arr[i]);
  }
  let temp = arr.length%3;
  while (temp > 0){
    res.push(arr[arr.length-arr.length%3 + 2-temp]);
    temp--;
  }

  return res;

}
module.exports = rank_by_two_large_one_small;
