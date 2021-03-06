const _ = require('lodash/fp')

const plus1 = number => number + 1
const plus2 = number => number + 2
const plus3 = number => number + 3

const result = _.pipe(
  plus1,
  plus2, 
  plus3, 
)(1)

console.log(result)
