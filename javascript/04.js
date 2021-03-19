
const userDetail = {
  name: "Tony",
  age: 14
}


function imPure1() {
  return userDetail.age
}

function imPure2(user) {
  user.age = 1
  return userDetail.age
}

function imPure3() {
  userDetail.age = 1
  return userDetail.age
}

function pureFunction(input) {
  return input // output
}

function pureFunction() {
  return 1 // output
}
