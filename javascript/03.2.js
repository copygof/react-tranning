
// Object spread 2

const number1 = [1,2,3]
const number2 = [4,5,6]

const mergeNumber = [...number1, ...number2]
// or use concat, don't use push
// const mergeNumber = number1.concat(number2)

console.log('mergeNumber => ', mergeNumber)
