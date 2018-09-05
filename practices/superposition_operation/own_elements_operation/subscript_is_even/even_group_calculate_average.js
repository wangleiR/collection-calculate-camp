'use strict';
var even_group_calculate_average = function(collection){

  let arr = collection.filter((ele,index)=> (index+1)%2 === 0).filter(num => num%2 === 0);
  if (arr.length === 0){
    return [0];
  }else {
    let res = [];
    let acc1 = arr.filter(num => num < 10).reduce((acc,cur)=>acc+cur,0);
    let len1 = arr.filter(num => num < 10).length
    if (len1 !== 0)
     res.push(acc1/len1);

    let acc2 = arr.filter(num => num < 100 && num > 10 ).reduce((acc,cur)=>acc+cur,0);
    let len2 = arr.filter(num => num < 100 && num > 10 ).length
    if (len2 !== 0)
      res.push(acc2/len2);

    let acc3 = arr.filter(num => num < 1000 && num > 100).reduce((acc,cur)=>acc+cur,0);
    let len3 = arr.filter(num => num < 1000 && num > 100).length
    if (len3 !== 0)
      res.push(acc3/len3);

    return res;
  }

};
module.exports = even_group_calculate_average;
