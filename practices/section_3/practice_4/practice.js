function create_updated_collection(collection_a, object_b) {
  //在这里写入代码

  let ca =   Object.entries(collection_a.reduce((acc,cur) => {
    if (cur.indexOf("-") != -1){
      let str = cur.split("-");
      acc[str[0]] ? acc[str[0]] += parseInt(str[1]) : acc[str[0]] = parseInt(str[1]);
    } else{
      acc[cur] ? acc[cur]++ : acc[cur] = 1;
    }
    return acc;
  },{})).filter(entry => !!entry).map(entry => {
    const key = entry[0];
    const count = entry[1];
    return { key, count };
  });

  return ca.filter(item => {
    if (object_b['value'].indexOf(item['key']) !== -1)
      item['count'] -= parseInt(item['count']/3);
    return item;
  })
}

module.exports = create_updated_collection;
