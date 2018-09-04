function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  return collection_a.filter(item => {
    if (object_b['value'].indexOf(item['key']) != -1)
      item['count']--;
    return item;
  })

}


module.exports = create_updated_collection;
