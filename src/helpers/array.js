const sortBy = (array, by) => array.sort((a, b) => (a[by] < b[by] ? -1 : 1))

const getChildrenAsObject = (data, parent, parentKey, idKey, depth) => {
  return {
    ...parent,
    children: data
      .filter(item => item[parentKey] === parent[idKey])
      .map(item => ({
        ...item,
        depth,
        children: getChildrenAsObject(data, item, parentKey, idKey, depth + 1),
      })),
  }
}

const getChildrenAsArray = (data, parent, parentKey, idKey, depth) => {
  return [
    { ...parent, depth },
    [
      data
        .filter(item => item[parentKey] === parent[idKey])
        .map(item =>
          getChildrenAsArray(data, item, parentKey, idKey, depth + 1),
        ),
    ],
  ]
}

module.exports = {
  sortBy,
  getChildrenAsObject,
  getChildrenAsArray,
}
