
// Object spread 1

const userDetail = {
  name: "Tony",
  age: 14
}

const address = {
  addressLine1: 'Bangkok'
}

const userInfo = {
  ...userDetail,
  ...address,
}
// Or use Object.assign
const userInfos = Object.assign({}, userDetail, address)

/**
 * Not add new property for userDetail like this
 */
// userDetail.addressLine1 = address.addressLine1
// const userDetails = userDetail

console.log('userInfo => ', userDetails)
console.log('userDetail => ', userDetail)