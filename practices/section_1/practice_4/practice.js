function collect_same_elements(collection_a, object_b) {
  //在这里写入代码

  let values = object_b['value'];
  let keys = [];
  collection_a.forEach(item => {
      keys.push(item['key']);
  });


  return keys.filter(num => values.indexOf(num) !== -1)
}

module.exports = collect_same_elements;
