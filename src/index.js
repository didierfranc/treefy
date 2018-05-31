const {
  sortBy,
  getChildrenAsObject,
  getChildrenAsArray,
} = require('./helpers/array')

const flattenDeep = require('lodash.flattendeep')

const toTree = (data, parentKey = 'parent', idKey = 'id') => {
  const root = data.filter(item => !item[parentKey])
  const tree = root.map(item =>
    getChildrenAsObject(data, item, parentKey, idKey, 1),
  )
  return tree
}

const toFlatTree = (data, parentKey = 'parent', idKey = 'id') => {
  const root = data.filter(item => !item[parentKey])
  const array = root.map(item =>
    getChildrenAsArray(data, item, parentKey, idKey, 0),
  )
  return flattenDeep(array)
}

module.exports = {
  toTree,
  toFlatTree,
}
