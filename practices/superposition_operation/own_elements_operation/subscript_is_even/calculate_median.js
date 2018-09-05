'use strict';
var calculate_median = function(collection){

    let arr = collection.filter((ele,index)=> (index+1)%2 === 0);
    if (arr.length%2 === 0) {
        return (arr[arr.length/2] + arr[arr.length/2-1])/2;
    }else{
      return arr[parseInt(arr.length/2)];
    }
    
};
module.exports = calculate_median;
