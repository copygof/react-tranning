

const userDetail = {
  name: "Tony",
  age: 14
}

function timeLeftForDoDrivingLicence(user) {
  if (user.age < 15) {
    user.age = 15 - user.age
    return user.age
  } else {
    return 0
  }
}

function logUser(user) {
  return `Name: ${user.name}, Age: ${user.age}`
}

console.log("Time left: ", timeLeftForDoDrivingLicence(userDetail))
console.log("User info: ", logUser(userDetail))
