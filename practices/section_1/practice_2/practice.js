function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码

  let flattened = collection_b.reduce(
    (a, b) => a.concat(b),
    []
  );
  return collection_a.filter(num => flattened.indexOf(num) != -1)
}

module.exports = collect_same_elements;
