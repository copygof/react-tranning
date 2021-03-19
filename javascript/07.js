

function plusWithTwoNumber(firstNumber) {
  const closureValue = firstNumber + 2
  return (secondNumber) => {
    return secondNumber + closureValue
  }
}

const plus10With2 = plusWithTwoNumber(10)

const plus10And5 = plus10With2(5)

console.log('result => ', plus10And5)