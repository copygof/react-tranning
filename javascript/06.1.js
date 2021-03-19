const _ = require('lodash')

function plusNumber(firstNumber, secondNumber) {
  return firstNumber + secondNumber
}

const plus10 = _.curry(plusNumber)(10)

const plus10And5 = plus10(5)

console.log('result => ', plus10And5)