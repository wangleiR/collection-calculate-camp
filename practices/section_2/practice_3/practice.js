function count_same_elements(collection) {
  //在这里写入代码

  return Object.entries(collection.reduce((acc,cur) => {
    if (cur.indexOf("-") != -1 || cur.indexOf(":") != -1 || cur.indexOf("[") != -1){
      let str = cur.split(/[-:[]/);
      acc[str[0]] ? acc[str[0]] += parseInt(str[1]) : acc[str[0]] = parseInt(str[1]);
    } else{
      acc[cur] ? acc[cur]++ : acc[cur] = 1;
    }
    return acc;
  },{})).filter(entry => !!entry).map(entry => {
    const name = entry[0];
    const summary = entry[1];
    return { name, summary };
  });
}

module.exports = count_same_elements;
