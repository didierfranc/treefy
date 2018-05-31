const data = require('./data.json')
const { toTree, toFlatTree } = require('../')

it('generate tree from array', () => {
  const tree = toTree(data)
  expect(tree).toMatchSnapshot()
})

it('add depth to array element', () => {
  const tree = toFlatTree(data)
  console.log(tree)
  expect(tree).toMatchSnapshot()
})
