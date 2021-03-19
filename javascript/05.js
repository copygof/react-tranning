

function withAutoAddNumber(callbackFunction) {
  return callbackFunction(5)
}

function powNumber(number) {
  return Math.pow(number, 2)
}

const myNumber = withAutoAddNumber(powNumber)

console.log(myNumber)

// function filter(arr, callback) {
//   return arr.filter(callback)
// }
// const result = filter([1,2,3,5],  num => num === 2)
// console.log(result)