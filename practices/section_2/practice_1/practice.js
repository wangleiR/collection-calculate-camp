function count_same_elements(collection) {
  //在这里写入代码

  return Object.entries(collection.reduce((acc,cur) => {
      acc[cur] ? acc[cur]++ : acc[cur] = 1;
      return acc;
  },{})).filter(entry => !!entry).map(entry => {
    const key = entry[0];
    const count = entry[1];
    return { key, count };
  });
}

module.exports = count_same_elements;
