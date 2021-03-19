

function plusNumber(firstNumber) {
  return (secondNumber) => {
    return firstNumber + secondNumber
  }
}

const plus10 = plusNumber(10)

const plus10And5 = plus10(5)

console.log('result => ', plus10And5)