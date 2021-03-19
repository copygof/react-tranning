

const arr = [1,2,3,4,5]

const result = arr.reduce((prev, current) => {
  return prev + current
}, 0)

console.log('result => ', result)

const result2 = arr.reduce((prev, current) => {
  return {
    ...prev,
    ['number' + current]: current
  }
}, {})

console.log('result2 => ', result2)

const result3 = arr.reduce((prev, current) => {
  return prev + '-' + current
}, '')

console.log('result3 => ', result3)