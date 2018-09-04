'use strict';

function compute_chain_median(collection) {
  //在这里写入代码
  let arr = collection.split("->");
  arr.sort(function(a, b){return a - b});
  if (arr.length%2 == 0){
    return (Number(arr[arr.length/2]) + Number(arr[arr.length/2-1]))/2;
  } else {
    return Number(arr[(arr.length-1)/2])
  }
}

var chain = '1->4->6->2->3->10->9->8->11->20->19->30';
console.log(compute_chain_median(chain));

module.exports = compute_chain_median;
