

function plusNumber(firstNumber) {
  return (secondNumber) => {
    return firstNumber + secondNumber
  }
}

const plus10 = plusNumber(10)

const plus10And5 = plus10(5)
const plus10And6 = plus10(6)

console.log('result => ', plus10)