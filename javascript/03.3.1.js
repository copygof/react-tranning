
// Destructuring 1.2

const userDetail = {
  name: "Tony",
  age: 14
}

function logUserName({ name }) {
  console.log('UserName => ', name)
}

logUserName(userDetail)
